const mongoose = require('mongoose');
const IncomeTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});


const IncomeType = mongoose.model('IncomeType', IncomeTypeSchema);


module.exports = { IncomeType };
