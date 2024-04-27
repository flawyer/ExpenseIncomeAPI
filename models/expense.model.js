const mongoose = require('mongoose');
const { Decimal128 } = require('mongodb');


const ExpenseSchema = new mongoose.Schema({
  expenseAmount: {
    type: Decimal128,
    required: true
  },
  expenseType: {
    type: String, 
    required: true
  },
  expenseDate: {
    type: Date,
    required: true
  },
  expenseForm: {
    type: String,
    required: true
  }
});




const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = { Expense};
