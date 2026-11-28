const pool = require('../config/database');
// 1. API LẤY CÁC MỨC GIÁ THEO TRẢI NGHIỆM
// Endpoint: GET /api/pricing/:id
exports.getExperiencePricing = async (req, res) => {
    try {
        const { id } = req.params;
        const [pricing] = await pool.query(
            `SELECT price_id,
                   price_from,
                   price_to,
                   price_unit,
                   price_label,
                   age_group,
                   is_default,
                   price_note,
                   effective_from,
                   effective_to
            FROM experience_pricing
            WHERE experience_id = ?`,
            [id]
        );
        if (pricing.length === 0) {
            // Dự phòng nếu bảng pricing chưa có, lấy giá gốc từ bảng experiences
            const [base] = await pool.query('SELECT price FROM experiences WHERE id = ?', [id]);
            return res.json({
                success: true,
                data: [{
                    price_id: null,
                    price_from: base[0]?.price || 0,
                    price_to: base[0]?.price || 0,
                    price_unit: 'VNĐ/khách',
                    price_label: 'Tiêu chuẩn',
                    is_default: 1
                }]
            });
        }
        res.json({
            success: true,
            total: pricing.length,
            data: pricing
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
// 2. API LẤY LỊCH TRẢI NGHIỆM
// Endpoint: GET /api/schedules/:id
exports.getExperienceSchedules = async (req, res) => {
    try {
        const { id } = req.params;
        const [schedules] = await pool.query(
            `SELECT schedule_id,
                   operating_days,
                   start_time,
                   end_time,
                   schedule_note
            FROM experience_schedules
            WHERE experience_id = ?
            ORDER BY start_time ASC`,
            [id]
        );
        res.json({
            success: true,
            total: schedules.length,
            data: schedules
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
