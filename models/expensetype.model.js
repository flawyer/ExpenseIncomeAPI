const mongoose = require('mongoose');
const ExpenseSourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});


const ExpenseType = mongoose.model('ExpenseType', ExpenseSourceSchema);


module.exports = { ExpenseType };