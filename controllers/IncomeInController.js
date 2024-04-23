
const IncomeIn = require('../models/incomein.model');

exports.InsertIncomeIn = async (req, res) => {
  try {
    const incomeIn = new IncomeIn(req.body);
    await incomeIn.create();
    res.status(200).json({ message: 'IncomeIn created successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
};
