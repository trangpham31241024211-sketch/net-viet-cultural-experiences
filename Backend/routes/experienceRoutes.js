const express = require('express');
const router = express.Router();

const {
    getAllExperiences,
    getExperienceById
} = require('../controllers/experienceController');

// GET /api/experiences
router.get('/', getAllExperiences);
// GET /api/experiences/:id
router.get('/:id', getExperienceById);

module.exports = router;