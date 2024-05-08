const mongoose = require('mongoose');
const IncomeSourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});


const IncomeSource = mongoose.model('IncomeTitle', IncomeSourceSchema);


module.exports = { IncomeSource };