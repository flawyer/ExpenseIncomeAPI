const express = require('express');
const router = express.Router();
const Income = require('../controllers/IncomeController');


router.post('/Income', Income.InsertIncome);
router.get('/Income/:id', Income.GetIncome);
router.put('/Income/:id', Income.UpdateIncome);
router.get('/Income', Income.GetAllIncome);
router.delete('/Income/:id', Income.DeleteIncome);

module.exports =  router ; 
