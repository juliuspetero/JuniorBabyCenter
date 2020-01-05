const User = require('../models/user');

class AdminRepository {
  // Create a new user in the DB
  async createUser(employee) {
    const newUser = new User(employee);
    return await newUser.save();
  }

  // Query a user with a specified email
  async findUserByEmail(email) {
    return await User.findOne({ email });
  }
}

module.exports = new AdminRepository();
