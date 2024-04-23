 

const ExpenseInSchema = new mongoose.Schema({
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



const ExpenseIn = mongoose.model('ExpenseIn', ExpenseInSchema);


module.exports = { ExpenseIn };
