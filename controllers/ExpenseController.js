const {Expense} = require('../models/expense.model');

exports.InsertExpense = async(req,res) =>{
    try{
        const inExpense = new Expense(req.body);
        await inExpense.save();
        res.status(200).json({ message: 'Expense Type created successfully' });
    }
    catch(error){
        res.status(500).json({message:error.message});
    }

}

exports.GetExpense = async (req, res) => {
  try{
  const {id} = req.params;
  const GetExpense = await Expense.findById(id);
  res.status(200).json(GetExpense);
  }
  catch(error){
    res.Status(500).json({message: error.message});
  }
  }

  exports.UpdateExpense= async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
  
      if (!updateData || Object.keys(updateData).length === 0) {
        return res.status(400).json({ error: 'Update data is required' });
      }
  
      const updatedExpenseType = await Expense.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedExpenseType) {
        return res.status(404).json({  error: 'Expense Type record not found' });
      }
  
      res.status(200).json({ message: 'Expense  Type record updated successfully', updatedExpenseType });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  exports.GetAllExpense = async (req, res) => {
    try {
      const Expenses = await Expense.find();
  
      res.status(200).json(Expenses);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  exports.DeleteExpense = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedExpense = await Expense.findByIdAndDelete(id);
   
      if (!deletedExpense) {
        return res.status(404).json({ error: 'Expense record not found' });
      }
  
      res.status(200).json({ message: 'Expense Type record deleted successfully' });
    } catch (error) {
      console.error('Error Deleting Expense Type record:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  