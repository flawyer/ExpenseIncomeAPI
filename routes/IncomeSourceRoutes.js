const express = require('express');
const router = express.Router();
const IncomeSource = require('../controllers/IncomeSourceController');


router.post('/IncomeSource', IncomeSource.InsertIncomeSource);
router.get('/IncomeSource/:id', IncomeSource.GetIncomeSource);
router.put('/IncomeSource/:id', IncomeSource.UpdateIncomeSource);
router.get('/IncomeSource', IncomeSource.GetAllIncomeSource);
router.delete('/IncomeSource/:id', IncomeSource.DeleteIncomeSource);

module.exports =  router ; 