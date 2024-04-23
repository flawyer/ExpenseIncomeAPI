const ExpenseTypeSchema = new mongoose.Schema({
  _id: {
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

  const ExpenseType = mongoose.model('ExpenseType', ExpenseTypeSchema);
  module.exports = { ExpenseType };
