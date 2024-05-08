const mongoose = require('mongoose');
const { Decimal128 } = require('mongodb');


const IncomeSchema = new mongoose.Schema({
  incomeAmount: {
    type: Decimal128,
    required: true
  },
  incomeSourceId: {
    type: String, 
    required: true
  },
  incomeDate: {
    type: Date,
    required: true
  },
  incomeFormId: {
    type: String,
    required: true
  }
});




const Income = mongoose.model('Income', IncomeSchema);

module.exports = { Income};
