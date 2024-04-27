const express = require('express');
const router = express.Router();
const Expense = require('../controllers/ExpenseController');


router.get('/MonthlySaving/:id', Expense.GetExpense);
router.put('/Expense/:id', Expense.UpdateExpense);
router.get('/Expense', Expense.GetAllExpense);
router.delete('/Expense/:id', Expense.DeleteExpense);

module.exports =  router ; 
