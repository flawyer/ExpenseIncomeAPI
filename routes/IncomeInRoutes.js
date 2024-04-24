const express = require('express');
const router = express.Router();
const IncomeIn = require('../controllers/IncomeInController');


router.post('/IncomeIn', IncomeIn.InsertIncomeIn);
router.get('/IncomeIn/:id', IncomeIn.GetIncomeIn);
router.put('/IncomeIn/:id', IncomeIn.UpdateIncomeIn);
router.get('/IncomeIn', IncomeIn.GetAllIncomeIn);
router.delete('/IncomeIn/:id', IncomeIn.DeleteIncomeIn);

module.exports =  router ; 
