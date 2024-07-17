const { Expense, Expense } = require('../models/expense.model');
const { Income } = require('../models/income.model');

const getMonthlyDetails = async () => {
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

  return { monthName, totalIncome, totalExpense, monthlySaving };
};

const getDailyDetails = async () => {
  const currentDate = new Date();
  const startOfDay = new Date(currentDate.setHours(0, 0, 0, 0));
  const endOfDay = new Date(currentDate.setHours(23, 59, 59, 999));

  const incomes = await Income.find({
    incomeDate: {
      $gte: startOfDay,
      $lte: endOfDay
    }
  });

  const expenses = await Expense.find({
    expenseDate: {
      $gte: startOfDay,
      $lte: endOfDay
    }
  });

  const incomeAmounts = incomes.map(income => parseFloat(income.incomeAmount));
  const totalIncome = incomeAmounts.reduce((acc, curr) => acc + curr, 0);

  const expenseAmounts = expenses.map(expense => parseFloat(expense.expenseAmount));
  const totalExpense = expenseAmounts.reduce((acc, curr) => acc + curr, 0);

  const dailySaving = totalIncome - totalExpense;

  return { currentDate: startOfDay.toISOString().split('T')[0], totalIncome, totalExpense, dailySaving };
};
const getWeeklyDetails = async () => {
  const currentDate = new Date();
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay()); 
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); 

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

  return { weekStartDate, weekEndDate, totalIncome, totalExpense, weeklySaving };
};

const getCashAmount = async () => {
  const incomes = await Income.find({ incomeFormId: "6697463f060910fb26df4654" });
  const expenses = await Expense.find({ expenseFormId: "66974659060910fb26df465c" });

  const incomeAmounts = incomes.map(income => parseFloat(income.incomeAmount));
  const totalIncome = incomeAmounts.reduce((acc, curr) => acc + curr, 0);

  const expenseAmounts = expenses.map(expense => parseFloat(expense.expenseAmount));
  const totalExpense = expenseAmounts.reduce((acc, curr) => acc + curr, 0);

  const Amount = totalIncome - totalExpense;
  return Amount;
}

const getBankAmount = async () => {
  const incomes = await Income.find({ incomeFormId: "66974635060910fb26df4651" });
  const expenses = await Expense.find({ expenseFormId: "6697464d060910fb26df4659" });

  const incomeAmounts = incomes.map(income => parseFloat(income.incomeAmount));
  const totalIncome = incomeAmounts.reduce((acc, curr) => acc + curr, 0);

  const expenseAmounts = expenses.map(expense => parseFloat(expense.expenseAmount));
  const totalExpense = expenseAmounts.reduce((acc, curr) => acc + curr, 0);

  const Amount = totalIncome - totalExpense;
  return Amount;
}

const getOthers = async () => {
  const incomes = await Income.find({
    incomeFormId: { $nin: ["6697463f060910fb26df4654", "66974635060910fb26df4651"] }
  });
  const expenses = await Expense.find({
    expenseFormId: { $nin: ["66974659060910fb26df465c", "6697464d060910fb26df4659"] }
  });

  const incomeAmounts = incomes.map(income => parseFloat(income.incomeAmount));
  const totalIncome = incomeAmounts.reduce((acc, curr) => acc + curr, 0);

  const expenseAmounts = expenses.map(expense => parseFloat(expense.expenseAmount));
  const totalExpense = expenseAmounts.reduce((acc, curr) => acc + curr, 0);

  const Amount = totalIncome - totalExpense;
  return Amount;
}
const getExpenseDetails = async () => {
  const expenses = await Expense.find({});

  if (expenses.length === 0) {
    return {
      maxExpense: 0,
      minExpense: 0,
      maxExpenseFormId: null,
      minExpenseFormId: null
    };
  }

  const expenseAmounts = expenses.map(expense => ({
    amount: parseFloat(expense.expenseAmount),
    expenseFormId: expense.expenseFormId
  }));

  const maxExpense = expenseAmounts.reduce((max, expense) => expense.amount > max.amount ? expense : max, expenseAmounts[0]);
  const minExpense = expenseAmounts.reduce((min, expense) => expense.amount < min.amount ? expense : min, expenseAmounts[0]);

  const maxExpenseForm = await ExpenseForm.findById(maxExpense.expenseFormId);
  const minExpenseForm = await ExpenseForm.findById(minExpense.expenseFormId);

  return {
    maxExpenseFormName: maxExpenseForm ? maxExpenseForm.name : null,
    minExpenseFormName: minExpenseForm ? minExpenseForm.name : null
  };
}

const getYearlyDetails = async () => {
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

  return { yearStartDate, yearEndDate, totalIncome, totalExpense, yearlySaving };
};

exports.DashBoardDetails = async (req, res) => {
  try {
    const monthlyDetails = await getMonthlyDetails();
    const weeklyDetails = await getWeeklyDetails();
    const yearlyDetails = await getYearlyDetails();
    const dailyDetails = await getDailyDetails();
    const cashDetails = await getCashAmount();
    const BankDetails = await getBankAmount();
    const otherDetails = await getOthers();
    const maxminDetails = await getExpenseDetails();
    res.status(200).json({ 
      monthlyDetails, 
      weeklyDetails, 
      yearlyDetails,
      dailyDetails,
      cashDetails,
      BankDetails,
      otherDetails,
      maxminDetails
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
