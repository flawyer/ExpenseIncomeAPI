const {Income} = require('../models/income.model');

exports.InsertIncome = async(req,res) =>{
    try{
        const inIncome = new Income(req.body);
        await inIncome.save();
        res.status(200).json({ message: 'Income Type created successfully' });
    }
    catch(error){
        res.status(500).json({message:error.message});
    }

}

exports.GetIncome = async (req, res) => {
  try{
  const {id} = req.params;
  const GetIncome = await Income.findById(id);
  res.status(200).json(GetIncome);
  }
  catch(error){
    res.Status(500).json({message: error.message});
  }
  }

  exports.UpdateIncome= async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
  
      if (!updateData || Object.keys(updateData).length === 0) {
        return res.status(400).json({ error: 'Update data is required' });
      }
  
      const updatedIncomeType = await Income.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedIncomeType) {
        return res.status(404).json({  error: 'Income Type record not found' });
      }
  
      res.status(200).json({ message: 'Income  Type record updated successfully', updatedIncomeType });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  exports.GetAllIncome = async (req, res) => {
    try {
      const income = await Income.find();
  
      res.status(200).json(income);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  exports.DeleteIncome = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedIncome = await Income.findByIdAndDelete(id);
   
      if (!deletedIncome) {
        return res.status(404).json({ error: 'Income record not found' });
      }
  
      res.status(200).json({ message: 'Income Type record deleted successfully' });
    } catch (error) {
      console.error('Error Deleting Income Type record:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  