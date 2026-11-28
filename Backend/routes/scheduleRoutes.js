const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');
router.get('/pricing/:id', scheduleController.getExperiencePricing);
router.get('/schedules/:id', scheduleController.getExperienceSchedules);
module.exports = router;
