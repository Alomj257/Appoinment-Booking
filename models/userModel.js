const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is requied']
  },
  email: {
    type: String,
    required: [true, 'Email is requied'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is requied']
  }
});

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;