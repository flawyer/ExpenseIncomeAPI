const express = require('express');
const router = express.Router();
const ExpenseType = require('../controllers/ExpenseTypeController');


router.post('/ExpenseType', ExpenseType.InsertExpenseType);
router.get('/ExpenseType/:id', ExpenseType.GetExpenseType);
router.put('/ExpenseType/:id', ExpenseType.UpdateExpenseType);
router.get('/ExpenseType', ExpenseType.GetAllExpenseType);
router.delete('/ExpenseType/:id', ExpenseType.DeleteExpenseType);

module.exports =  router ; 