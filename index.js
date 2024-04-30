const express = require('express'); 
const cors = require('cors');
const Income  = require('./routes/IncomeRoutes');
const Expense = require('./routes/ExpenseRoutes');
const Details = require('./routes/DetailRoutes');
const app = express();
const mongoose = require('mongoose');
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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb+srv://flawyer:zINIerlXM1DzXDmY@cluster0.ski5o78.mongodb.net/MisApi?retryWrites=true&w=majority");
        console.log("Connected to database");
    } catch (error) {
        console.error("Not connected to database:", error);
        process.exit(1); // Exit the process if unable to connect
    }
}

connectToDatabase();
