const express = require('express');
const router = express.Router();
const IEDetails = require('../controllers/DetailsController');


router.get('/MonthlyEarning', IEDetails.monthlySaving);
router.get('/WeeklySaving',IEDetails.weeklySaving)
router.get('/YearlySaving',IEDetails.yearlySaving)
// router.get('/WeeklySaving',IEDetails.weeklySaving)
module.exports =  router ; 
