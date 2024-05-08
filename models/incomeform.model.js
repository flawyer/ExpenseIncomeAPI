const mongoose = require('mongoose');

const IncomeFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});



const IncomeForm = mongoose.model('IncomeForm', IncomeFormSchema);


module.exports = { IncomeForm };