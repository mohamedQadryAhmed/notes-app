const express = require('express');
const { registerUser, login } = require('../controllers/userController');

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);
router.post('/login', login);

// Export the router
module.exports = router;
