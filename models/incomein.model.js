const mongoose = require('mongoose');

const IncomeInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});



const IncomeIn = mongoose.model('IncomeIn', IncomeInSchema);


module.exports = { IncomeIn };
