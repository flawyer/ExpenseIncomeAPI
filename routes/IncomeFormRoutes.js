const express = require('express');
const router = express.Router();
const IncomeForm = require('../controllers/IncomeFormController');


router.post('/IncomeForm', IncomeForm.InsertIncomeForm);
router.get('/IncomeForm/:id', IncomeForm.GetIncomeForm);
router.put('/IncomeForm/:id', IncomeForm.UpdateIncomeForm);
router.get('/IncomeForm', IncomeForm.GetAllIncomeForm);
router.delete('/IncomeForm/:id', IncomeForm.DeleteIncomeForm);

module.exports =  router ; 