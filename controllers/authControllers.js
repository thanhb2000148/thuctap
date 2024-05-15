const account = require("../models/account");
const bcrypt = require("bcrypt");
const authController = {
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      // create a new account
      const newAccount = await new account({
        user_name: req.body.user_name,
        password: hashedPassword,
      });
      // save the account
      const Account = await newAccount.save();
      res.status(201).json(Account);
    } catch (e) {
      res.status(500).json({
        message: e.message,
      });
    }
  },

  // Login
  loginUser: async (req, res) => {
    try {
      const loginAccount = await account.findOne({
        user_name: req.body.user_name,
      });
      if (!loginAccount) {
        return res.status(404).json({
          message: "Account not found",
        });
      }
      const isMatch = await bcrypt.compare(
        req.body.password,
        loginAccount.password
      );
      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid credentials",
        });
      }
      res.status(200).json(loginAccount);
    } catch (e) {
      res.status(500).json({
        message: e.message,
      });
    }
  },

  // Logout
};
module.exports = authController;
