const mongoose = require('mongoose');

const ExpenseFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});



const ExpenseForm = mongoose.model('ExpenseForm', ExpenseFormSchema);


module.exports = { ExpenseForm };