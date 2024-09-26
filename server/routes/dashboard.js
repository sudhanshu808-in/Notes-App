const express = require('express');
const router = express.Router();
const dashboardcontroller = require('../controllers/dashboardcontroller');
const { isLoggedIn }=require('../middleware/chechAuth');


router.get('/dashboard',isLoggedIn,dashboardcontroller.dashboard);


module.exports = router;

