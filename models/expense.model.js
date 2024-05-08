const mongoose = require('mongoose');
const { Decimal128 } = require('mongodb');


const ExpenseSchema = new mongoose.Schema({
  expenseAmount: {
    type: Decimal128,
    required: true
  },
  expenseTypeId: {
    type: String, 
    required: true
  },
  expenseDate: {
    type: Date,
    required: true
  },
  expenseFormId: {
    type: String,
    required: true
  }
});




const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = { Expense};
