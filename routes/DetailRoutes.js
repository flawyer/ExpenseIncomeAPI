const express = require('express');
const router = express.Router();
const IEDetails = require('../controllers/DetailsController');


router.get('/MonthlyEarning', IEDetails.monthlySaving);


module.exports =  router ; 
