const express = require('express');
const router = express.Router();
const IncomeType = require('../controllers/IncomeTypeController');


router.post('/IncomeType', IncomeType.InsertIncomeType);
router.get('/IncomeType/:id', IncomeType.GetIncomeType);
router.put('/IncomeType/:id', IncomeType.UpdateIncomeType);
router.get('/IncomeType', IncomeType.GetAllIncomeType);
router.delete('/IncomeType/:id', IncomeType.DeleteIncomeType);

module.exports =  router ; 
