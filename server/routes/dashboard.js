const express = require('express');
const router = express.Router();
const dashboardcontroller = require('../controllers/dashboardcontroller');

router.get('/dashboard',dashboardcontroller.dashboard);

module.exports = router;

