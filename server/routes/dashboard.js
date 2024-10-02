const express = require('express');
const router = express.Router();
const dashboardcontroller = require('../controllers/dashboardcontroller');
const { isLoggedIn }=require('../middleware/chechAuth');


router.get('/dashboard',isLoggedIn,dashboardcontroller.dashboard);
router.get('/dashboard/item/:id',isLoggedIn,dashboardcontroller.dashboardViewNote);
router.post('/dashboard/item/:id',isLoggedIn,dashboardcontroller.dashboardUpdateNote);
router.post('/dashboard/item-delete/:id',isLoggedIn,dashboardcontroller.dashboardDeleteNote);
router.get('/dashboard/add',isLoggedIn,dashboardcontroller.dashboardAddNote);
router.post('/dashboard/add',isLoggedIn,dashboardcontroller.dashboardAddNoteSubmit);
router.get('/dashboard/search',isLoggedIn,dashboardcontroller.dashboardSearch);
router.post('/dashboard/search',isLoggedIn,dashboardcontroller.dashboardSearchSubmit);

module.exports = router;

