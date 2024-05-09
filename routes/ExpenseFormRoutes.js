const express = require('express');
const router = express.Router();
const ExpenseForm = require('../controllers/ExpenseFormController');


router.post('/ExpenseForm', ExpenseForm.InsertExpenseForm);
router.get('/ExpenseForm/:id', ExpenseForm.GetExpenseForm);
router.put('/ExpenseForm/:id', ExpenseForm.UpdateExpenseForm);
router.get('/ExpenseForm', ExpenseForm.GetAllExpenseForm);
router.delete('/ExpenseForm/:id', ExpenseForm.DeleteExpenseForm);

module.exports =  router ; 