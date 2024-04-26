const expense = require('../models/expense.model');
const income  = require('../models/income.model');

exports.dailyEarning = async(req,res)=>{
try{
 const today = new Date();
 today.setHours(0, 0, 0, 0);
 const endOfDay = new Date();
 endOfDay.setHours(23, 59, 59, 999);
 const incomes = await income.find({
   Datetime: {
     $gte: today,
     $lte: endOfDay
   }
 });
 const expenses = await expense.find({
    Date: {
        $gte: today,
        $lte: endOfDay
      }
 })

const incomeAmounts = incomes.map(income => income.incomeAmount);
const totalIncome = incomeAmounts.reduce((acc, curr) => acc + curr, 0);
const expenseAmounts =  expenses.map(expense =>expense.expenseAmount);
const totalExpense = expenseAmounts.reduce((acc, curr) => acc + curr, 0);
res.status(500).json({totalExpense,totalIncome});
}
catch(error){
   res.status(500).json({error:error.message});
}

};