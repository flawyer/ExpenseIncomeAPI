const mongoose = require('mongoose');
const { Decimal128 } = require('mongodb');

// Define schema for Income
const IncomeSchema = new mongoose.Schema({
  incomeAmount: {
    type: Decimal128,
    required: true
  },
  incomeTypeId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'IncomeType',
    required: true
  },
  incomeDate: {
    type: Date,
    required: true
  },
  incomeInId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'IncomeIn',
    required: true
  }
});




const Income = mongoose.model('Income', IncomeSchema);

module.exports = { Income};
