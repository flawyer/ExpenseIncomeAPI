// controllers/userController.js
const User = require('../models/User');

// Sample data
const users = [
  new User(1, 'John Doe', 'john@example.com'),
  new User(2, 'Jane Smith', 'jane@example.com'),
];

// Controller functions
exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
