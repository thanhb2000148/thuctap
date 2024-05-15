const account = require("../models/account");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authController = {
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      //create a new user
      const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_user: req.body.email_user,
        address_user: req.body.address_user,
        phone_number: req.body.phone_number,
        created_at: new Date(),
        gender_user: req.body.gender_user,
        middle_name: req.body.middle_name,
        full_name: req.body.full_name,
        avt: req.body.avt,
      });
      const savedUser = await newUser.save();
      // create a new account link it to the user
      const newAccount = new account({
        user_name: req.body.user_name,
        password: hashedPassword,
        user_id: savedUser._id,
      });
      // save the account
      const savedAccount = await newAccount.save();
      res.status(201).json({ account: savedAccount, user: savedUser });
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
          message: "wrong username",
        });
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        loginAccount.password
      );
      if (!validPassword) {
        return res.status(400).json({
          message: "wrong password",
        });
      }
      if (loginAccount && validPassword) {
        const webToken = jwt.sign(
          {
            id: loginAccount.id,
            admin: loginAccount.object_role.is_admin,
          },
          process.env.JWT_ACCESS_KEY, // key để đăng nhập vào
          { expiresIn: "60s" } // thời gian token hết hạn
        );
        const { password, ...others } = loginAccount._doc; // bỏ password ra khỏi res
        res.status(200).json({ ...others, webToken });
      }
    } catch (e) {
      res.status(500).json({
        message: e.message,
      });
    }
  },

  // Logout
};
module.exports = authController;
