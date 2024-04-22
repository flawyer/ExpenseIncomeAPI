// app.js
const express = require('express');
const userRoutes = require('./routes/UserRoutes');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);


mongoose.connect("mongodb+srv://flawyer:zINIerlXM1DzXDmY@cluster0.ski5o78.mongodb.net/MisApi?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected To Database");
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
})
.catch(()=>{
    console.log("Not Connected To Database");
});