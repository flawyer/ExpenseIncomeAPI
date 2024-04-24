const express = require('express');
const IncomeIn = require('./routes/IncomeInRoutes'); 
const Income  = require('./routes/IncomeRoutes');
const IncomeType = require('./routes/IncomeTypeRoutes')
const app = express();
const mongoose = require('mongoose');
const port = 3000;

// Middleware
app.use(express.json());


//incomedetail ka basxa bhanera
app.use('/api', IncomeIn);
//incometype income ko source
app.use('/api',IncomeType)
//income 
app.use('/api',Income)


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
