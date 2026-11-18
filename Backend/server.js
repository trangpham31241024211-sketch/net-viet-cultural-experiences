const express = require('express');
const cors = require('cors');
const pool = require('./config/database');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Kiểm tra Backend
app.get('/', (req, res) => {
    res.json({
        message: 'Net Viet Backend API is running!'
    });
});

// Kiểm tra kết nối MySQL
app.get('/api/test-db', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT 1 AS result');

        res.json({
            success: true,
            message: 'MySQL connected successfully!',
            data: rows
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'MySQL connection failed!',
            error: error.message
        });
    }
});

// Khởi động server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});