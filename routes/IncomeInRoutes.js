// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const IncomeIn = require('../controllers/IncomeInController');

// Routes
router.post('/IncomeIn', IncomeIn.InsertIncomeIn);

module.exports = router;
