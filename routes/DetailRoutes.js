const express = require('express');
const router = express.Router();
const IEDetails = require('../controllers/DetailsController');


router.get('/DashBoardDetails', IEDetails.DashBoardDetails);

// router.get('/WeeklySaving',IEDetails.weeklySaving)
module.exports =  router ; 
