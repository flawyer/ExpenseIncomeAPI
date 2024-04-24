const {IncomeType} = require('../models/incometype.model');

exports.InsertIncomeType = async(req,res) =>{
    try{
        const inIncomeType = new IncomeType(req.body);
        await inIncomeType.save();
        res.status(200).json({ message: 'Income Type created successfully' });
    }
    catch(erro){
        res.status(500).json({error:error.message});
    }

}

exports.GetIncomeType = async (req, res) => {
  try{
  const {id} = req.params;
  const GetIncomeType = await IncomeType.findById(id);
  res.status(200).json(GetIncomeType);
  }
  catch(error){
    res.Status(500).json({message: error.message});
  }
  }

  exports.UpdateIncomeType= async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
  
      if (!updateData || Object.keys(updateData).length === 0) {
        return res.status(400).json({ error: 'Update data is required' });
      }
  
      const updatedIncomeType = await IncomeType.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedIncomeType) {
        return res.status(404).json({  error: 'Income Type record not found' });
      }
  
      res.status(200).json({ message: 'Income  Type record updated successfully', updatedIncomeType });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  exports.GetAllIncomeType = async (req, res) => {
    try {
      const incomeType = await IncomeType.find();
  
      res.status(200).json(incomeType);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  exports.DeleteIncomeType = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedIncomeType = await IncomeType.findByIdAndDelete(id);
  
      if (!deletedIncomeType) {
        return res.status(404).json({ error: 'Income record not found' });
      }
  
      res.status(200).json({ message: 'Income Type record deleted successfully' });
    } catch (error) {
      console.error('Error Deleting Income Type record:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  