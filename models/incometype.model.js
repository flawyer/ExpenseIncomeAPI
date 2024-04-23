const mongoose = require('mongoose');
const IncomeTypeSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true 
  },
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
