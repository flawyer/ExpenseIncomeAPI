const {Expense} = require('../models/expense.model');
const {Income}  = require('../models/income.model');

exports.monthlySaving = async (req, res) => {
  try {
    const currentMonth = new Date();
    const startMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const endMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const monthName = monthNames[currentMonth.getMonth()]; 

    const incomes = await Income.find({
      incomeDate: {
        $gte: startMonth,
        $lte: endMonth
      }
    });
    const expenses = await Expense.find({
      expenseDate: {
        $gte: startMonth,
        $lte: endMonth
      }
    });

    const incomeAmounts = incomes.map(income => parseFloat(income.incomeAmount));
    const totalIncome = incomeAmounts.reduce((acc, curr) => acc + curr, 0);
    const expenseAmounts = expenses.map(expense => parseFloat(expense.expenseAmount));
    const totalExpense = expenseAmounts.reduce((acc, curr) => acc + curr, 0);

    const monthlySaving = totalIncome - totalExpense;
    res.status(200).json({ monthName, totalIncome, totalExpense, monthlySaving });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.weeklySaving = async (req, res) => {
  try {
    const currentDate = new Date();
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay()); // Start of current week (Sunday)

    const endOfWeek = new Date(currentDate);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // End of current week (Saturday)

    const weekStartDate = startOfWeek.toISOString().split('T')[0];
    const weekEndDate = endOfWeek.toISOString().split('T')[0];

    const incomes = await Income.find({
      incomeDate: {
        $gte: weekStartDate,
        $lte: weekEndDate
      }
    });
    const expenses = await Expense.find({
      expenseDate: {
        $gte: weekStartDate,
        $lte: weekEndDate
      }
    });

    const incomeAmounts = incomes.map(income => parseFloat(income.incomeAmount));
    const totalIncome = incomeAmounts.reduce((acc, curr) => acc + curr, 0);

    const expenseAmounts = expenses.map(expense => parseFloat(expense.expenseAmount));
    const totalExpense = expenseAmounts.reduce((acc, curr) => acc + curr, 0);

    const weeklySaving = totalIncome - totalExpense;
    
    res.status(200).json({ weekStartDate, weekEndDate, totalIncome, totalExpense, weeklySaving });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.yearlySaving = async (req, res) => {
  try {
    const currentDate = new Date();
    const startOfYear = new Date(currentDate.getFullYear(), 0, 1); 
    const endOfYear = new Date(currentDate.getFullYear(), 11 + 1, 0);

    const yearStartDate = startOfYear.toISOString().split('T')[0];
    const yearEndDate = endOfYear.toISOString().split('T')[0];

    const incomes = await Income.find({
      incomeDate: {
        $gte: yearStartDate,
        $lte: yearEndDate
      }
    });
    const expenses = await Expense.find({
      expenseDate: {
        $gte: yearStartDate,
        $lte: yearEndDate
      }
    });

    const incomeAmounts = incomes.map(income => parseFloat(income.incomeAmount));
    const totalIncome = incomeAmounts.reduce((acc, curr) => acc + curr, 0);

    const expenseAmounts = expenses.map(expense => parseFloat(expense.expenseAmount));
    const totalExpense = expenseAmounts.reduce((acc, curr) => acc + curr, 0);

    const yearlySaving = totalIncome - totalExpense;
    
    res.status(200).json({ yearStartDate, yearEndDate, totalIncome, totalExpense, yearlySaving });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
