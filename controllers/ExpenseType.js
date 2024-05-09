
const {ExpenseType} = require('../models/expensetype.model');
const {Income} = require('../models/income.model');

exports.InsertExpenseType = async (req, res) => {
  try {
    const expenseType = new ExpenseType(req.body);
    await expenseType.save();
    res.status(200).json({ message: 'ExpenseType created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
};
exports.GetExpenseType = async (req, res) => {
  try{
  const {id} = req.params;
  const expenseType = await ExpenseType.findById(id);
  res.status(200).json(expenseType);
  }
  catch(error){
    res.Status(500).json({message: error.message});
  }
  }

  exports.UpdateExpenseType = async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
  
      if (!updateData || Object.keys(updateData).length === 0) {
        return res.status(400).json({ error: 'Update data is required' });
      }
  
      const updatedIncome = await ExpenseType.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedIncome) {
        return res.status(404).json({ error: 'Income Form record not found' });
      }
  
      res.status(200).json({ message: 'Income Form record updated successfully', updatedIncome });
    } catch (error) {
      console.error('Error updating income record:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  exports.GetAllExpenseType = async (req, res) => {
    try {
      const expenseTypes = await ExpenseType.find();
  
      res.status(200).json(expenseTypes);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  exports.DeleteExpenseType = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedIncome = await ExpenseType.findByIdAndDelete(id);
      const hasReferences = await Income.exists({ expenseTypeId: id });

      if (hasReferences) {
        return res.status(400).json({ error: 'Cannot delete. There are references to this income record.' });
      }
      if (!deletedIncome) {
        return res.status(404).json({ error: 'Income record not found' });
      }
  
      res.status(200).json({ message: 'Income record deleted successfully' });
    } catch (error) {
      console.error('Error deleting income record:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  