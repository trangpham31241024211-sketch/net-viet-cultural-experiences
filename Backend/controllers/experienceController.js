const pool = require('../config/database');

// GET /api/experiences
// Lấy danh sách trải nghiệm
const getAllExperiences = async (req, res) => {
    try {
        const search = typeof req.query.search === 'string' ? req.query.search : '';
        const region = typeof req.query.region === 'string' ? req.query.region : '';
        const category = typeof req.query.category === 'string' ? req.query.category : '';

        let sql = `
            SELECT
                e.experience_id,
                e.experience_code,
                e.experience_name,
                e.name_en,
                e.description,
                e.duration_text,
                e.rating_avg,
                e.review_count,
                e.status,
                l.location_name,
                l.province,
                r.region_name,
                c.category_name
            FROM experiences e
            LEFT JOIN locations l
                ON e.location_id = l.location_id
            LEFT JOIN regions r
                ON l.region_id = r.region_id
            LEFT JOIN categories c
                ON e.category_id = c.category_id
            WHERE 1 = 1
        `;

        const params = [];

        // Tìm kiếm theo tên trải nghiệm
        if (search && search.trim() !== '') {
            sql += ` AND e.experience_name LIKE ?`;
            params.push(`%${search.trim()}%`);
        }

        // Lọc theo khu vực
        if (region && region.trim() !== '') {
            sql += ` AND r.region_name LIKE ?`;
            params.push(`%${region.trim()}%`);
        }

        // Lọc theo danh mục
        if (category && category.trim() !== '') {
            sql += ` AND c.category_name LIKE ?`;
            params.push(`%${category.trim()}%`);
        }

        sql += ` ORDER BY e.experience_id ASC`;

        const [rows] = await pool.query(sql, params);

        res.status(200).json({
            success: true,
            total: rows.length,
            filters: {
                search: search || null,
                region: region || null,
                category: category || null
            },
            data: rows
        });

    } catch (error) {
        console.error('Error getting experiences:', error);

        res.status(500).json({
            success: false,
            message: 'Không thể lấy danh sách trải nghiệm.',
            error: error.message
        });
    }
};
// GET /api/experiences/:id
// Lấy chi tiết một trải nghiệm
const getExperienceById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
            return res.status(400).json({
                success: false,
                message: 'ID trải nghiệm không hợp lệ.'
            });
        }

        const [experiences] = await pool.query(`
            SELECT
                e.*,
                l.location_name,
                l.province,
                l.district,
                l.address,
                r.region_name,
                c.category_name
            FROM experiences e
            LEFT JOIN locations l
                ON e.location_id = l.location_id
            LEFT JOIN regions r
                ON l.region_id = r.region_id
            LEFT JOIN categories c
                ON e.category_id = c.category_id
            WHERE e.experience_id = ?
        `, [id]);

        if (experiences.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy trải nghiệm.'
            });
        }

        const [images] = await pool.query(
            'SELECT * FROM experience_images WHERE experience_id = ?',
            [id]
        );

        const [pricing] = await pool.query(
            'SELECT * FROM experience_pricing WHERE experience_id = ?',
            [id]
        );

        const [schedules] = await pool.query(
            'SELECT * FROM experience_schedules WHERE experience_id = ?',
            [id]
        );

        res.status(200).json({
            success: true,
            data: {
                ...experiences[0],
                images,
                pricing,
                schedules
            }
        });

    } catch (error) {
        console.error('Error getting experience detail:', error);

        res.status(500).json({
            success: false,
            message: 'Không thể lấy chi tiết trải nghiệm.',
            error: error.message
        });
    }
};
module.exports = {
    getAllExperiences,
    getExperienceById
};