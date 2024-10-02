const express = require('express');
const router = express.Router();
const dashboardcontroller = require('../controllers/dashboardcontroller');
const { isLoggedIn }=require('../middleware/chechAuth');


router.get('/dashboard',isLoggedIn,dashboardcontroller.dashboard);
router.get('/dashboard/item/:id',isLoggedIn,dashboardcontroller.dashboardViewNote);
router.post('/dashboard/item/:id',isLoggedIn,dashboardcontroller.dashboardUpdateNote);

module.exports = router;

