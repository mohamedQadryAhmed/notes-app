const express = require('express');
const { registerUser } = require('../controllers/userController');

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

// Export the router
module.exports = router;
