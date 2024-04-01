const UserModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Check if the user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Return user data if login successful
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Controller function for user registration
const registerController = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if the user already exists
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        // If user already exists, send an error response
        return res.status(400).json({ message: 'User already exists' }); // Send a message here
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new UserModel({
        name,
        email,
        password: hashedPassword
      });
      await newUser.save();
  
      // Return success message
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      // If an error occurs, send an error response
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  

module.exports = { loginController, registerController };
