
const {IncomeSource} = require('../models/incomesource.model');
const {Income} = require('../models/income.model');

exports.InsertIncomeSource = async (req, res) => {
  try {
    const incomeSource = new IncomeSource(req.body);
    await incomeSource.save();
    res.status(200).json({ message: 'IncomeSource created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
};
exports.GetIncomeSource = async (req, res) => {
  try{
  const {id} = req.params;
  const incomeSource = await IncomeSource.findById(id);
  res.status(200).json(incomeSource);
  }
  catch(error){
    res.Status(500).json({message: error.message});
  }
  }

  exports.UpdateIncomeSource = async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
  
      if (!updateData || Object.keys(updateData).length === 0) {
        return res.status(400).json({ error: 'Update data is required' });
      }
  
      const updatedIncome = await IncomeSource.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedIncome) {
        return res.status(404).json({ error: 'Income Form record not found' });
      }
  
      res.status(200).json({ message: 'Income Form record updated successfully', updatedIncome });
    } catch (error) {
      console.error('Error updating income record:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  exports.GetAllIncomeSource = async (req, res) => {
    try {
      const incomeSources = await IncomeSource.find();
  
      res.status(200).json(incomeSources);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  exports.DeleteIncomeSource = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedIncome = await IncomeSource.findByIdAndDelete(id);
      const hasReferences = await Income.exists({ incomeSourceId: id });

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
  