const express = require('express'); 
const cors = require('cors');
require('dotenv').config(); 
const Income  = require('./routes/IncomeRoutes');
const Expense = require('./routes/ExpenseRoutes');
const Details = require('./routes/DetailRoutes');
const app = express();
const mongoose = require('mongoose');
const  IncomeForm  = require('./routes/IncomeFormRoutes');
const  IncomeSource  = require('./routes/IncomeSourceRoutes');
const  ExpenseForm  = require('./routes/ExpenseFormRoutes');
const  ExpenseType  = require('./routes/ExpenseTypeRoutes');
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

//income 
app.use('/api',Income)
//expense
app.use('/api',Expense)
//details
app.use('/api',Details)
app.use('/api', IncomeForm);
//incometype income ko source
app.use('/api',IncomeSource);
app.use('/api',ExpenseForm);
app.use('/api',ExpenseType)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DATABASE_CONNECT);
        console.log("Connected to database");
    } catch (error) {
        console.error("Not connected to database:", error);
        process.exit(1); // Exit the process if unable to connect
    }
}

connectToDatabase();
