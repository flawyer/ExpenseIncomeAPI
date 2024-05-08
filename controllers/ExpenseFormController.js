
const {ExpenseForm} = require('../models/expenseform.model');
const {Expense} = require('../models/expense.model');

exports.InsertExpenseForm = async (req, res) => {
  try {
    const expenseForm = new ExpenseForm(req.body);
    await expenseForm.save();
    res.status(200).json({ message: 'ExpenseForm created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
};
exports.GetExpenseForm = async (req, res) => {
  try{
  const {id} = req.params;
  const expenseForm = await ExpenseForm.findById(id);
  res.status(200).json(expenseForm);
  }
  catch(error){
    res.Status(500).json({message: error.message});
  }
  }

  exports.UpdateExpenseForm = async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
  
      if (!updateData || Object.keys(updateData).length === 0) {
        return res.status(400).json({ error: 'Update data is required' });
      }
  
      const updatedExpense = await ExpenseForm.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedExpense) {
        return res.status(404).json({ error: 'Expense Form record not found' });
      }
  
      res.status(200).json({ message: 'Expense Form record updated successfully', updatedExpense });
    } catch (error) {
      console.error('Error updating expense record:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  exports.GetAllExpenseForm = async (req, res) => {
    try {
      const expenseForms = await ExpenseForm.find();
  
      res.status(200).json(expenseForms);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  exports.DeleteExpenseForm = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedExpense = await ExpenseForm.findByIdAndDelete(id);
      const hasReferences = await Expense.exists({ expenseFormId: id });

      if (hasReferences) {
        return res.status(400).json({ error: 'Cannot delete. There are references to this expense record.' });
      }
      if (!deletedExpense) {
        return res.status(404).json({ error: 'Expense record not found' });
      }
  
      res.status(200).json({ message: 'Expense record deleted successfully' });
    } catch (error) {
      console.error('Error deleting expense record:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  