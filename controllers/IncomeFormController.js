
const {IncomeForm} = require('../models/incomeform.model');
const {Income} = require('../models/income.model');

exports.InsertIncomeForm = async (req, res) => {
  try {
    const incomeForm = new IncomeForm(req.body);
    await incomeForm.save();
    res.status(200).json({ message: 'IncomeForm created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
};
exports.GetIncomeForm = async (req, res) => {
  try{
  const {id} = req.params;
  const incomeForm = await IncomeForm.findById(id);
  res.status(200).json(incomeForm);
  }
  catch(error){
    res.Status(500).json({message: error.message});
  }
  }

  exports.UpdateIncomeForm = async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
  
      if (!updateData || Object.keys(updateData).length === 0) {
        return res.status(400).json({ error: 'Update data is required' });
      }
  
      const updatedIncome = await IncomeForm.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedIncome) {
        return res.status(404).json({ error: 'Income Form record not found' });
      }
  
      res.status(200).json({ message: 'Income Form record updated successfully', updatedIncome });
    } catch (error) {
      console.error('Error updating income record:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  exports.GetAllIncomeForm = async (req, res) => {
    try {
      const incomeForms = await IncomeForm.find();
  
      res.status(200).json(incomeForms);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  exports.DeleteIncomeForm = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedIncome = await IncomeForm.findByIdAndDelete(id);
      const hasReferences = await Income.exists({ incomeFormId: id });

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
  