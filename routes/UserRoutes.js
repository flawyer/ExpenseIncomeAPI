// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// Routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

module.exports = router;
