 

const ExpenseInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});



const ExpenseIn = mongoose.model('ExpenseIn', ExpenseInSchema);


module.exports = { ExpenseIn };
