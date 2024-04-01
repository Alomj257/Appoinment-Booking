const express = require('express');
const router = express.Router(); // Define an Express router

const { loginController, registerController } = require('../controllers/userController');

// Define your routes using the router object
// LOGIN || POST
router.post('/login', loginController);

// REGISTER || POST
router.post('/register', registerController);

module.exports = router; // Export the router
