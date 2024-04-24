
const {IncomeIn} = require('../models/incomein.model');
const {Income} = require('../models/income.model');

exports.InsertIncomeIn = async (req, res) => {
  try {
    const incomeIn = new IncomeIn(req.body);
    await incomeIn.save();
    res.status(200).json({ message: 'IncomeIn created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
};
exports.GetIncomeIn = async (req, res) => {
  try{
  const {id} = req.params;
  const incomeIn = await IncomeIn.findById(id);
  res.status(200).json(incomeIn);
  }
  catch(error){
    res.Status(500).json({message: error.message});
  }
  }

  exports.UpdateIncomeIn = async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
  
      if (!updateData || Object.keys(updateData).length === 0) {
        return res.status(400).json({ error: 'Update data is required' });
      }
  
      const updatedIncome = await IncomeIn.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedIncome) {
        return res.status(404).json({ error: 'Income In record not found' });
      }
  
      res.status(200).json({ message: 'Income In record updated successfully', updatedIncome });
    } catch (error) {
      console.error('Error updating income record:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  exports.GetAllIncomeIn = async (req, res) => {
    try {
      const incomeIns = await IncomeIn.find();
  
      res.status(200).json(incomeIns);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  exports.DeleteIncomeIn = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedIncome = await IncomeIn.findByIdAndDelete(id);
      const hasReferences = await Income.exists({ incomeInId: id });

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
  