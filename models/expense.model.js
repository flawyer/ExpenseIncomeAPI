const mongoose = require('mongoose');
const { Decimal128 } = require('mongodb');

const ExpenseSchema = new mongoose.Schema({
    expenseId: {
      type: String,
      required: true,
      unique: true // Primary key
    },
    expenseAmount: {
      type: Decimal128,
      required: true
    },
    expenseTypeId: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'ExpenseType',
      required: true
    },
    expenseDate: {
      type: Date,
      required: true
    },
    expenseInId: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'ExpenseIn',
      required: true
    }
  });
  const Expense = mongoose.model('Expense', ExpenseSchema);
  module.exports = { Expense };
