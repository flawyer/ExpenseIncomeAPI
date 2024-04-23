const mongoose = require('mongoose');

const IncomeInSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true // Primary key
  },
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
