const account = require("../models/account");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  registerUserSchema,
  loginUserSchema,
} = require("../validation/authValidator");
const authController = {
  registerUser: async (req, res) => {
    try {
      const { error } = registerUserSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
      const existingAccount = await account.findOne({
        USER_NAME: req.body.user_name,
      });
      if (existingAccount) {
        return res.status(400).json({ message: "username already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      //create a new user
      const newUser = new User({
        FIRST_NAME: req.body.first_name,
        LAST_NAME: req.body.last_name,
        EMAIL_USER: req.body.email_user,
        PHONE_NUMBER: req.body.phone_number,
        CREATED_AT: new Date(),
        GENGER_USER: req.body.gender_user,
        MIDLE_NAME: req.body.middle_name,
        FULL_NAME: req.body.full_name,
        AVT_URL: req.body.avt,
      });
      const savedUser = await newUser.save();
      // create a new account link it to the user
      const newAccount = new account({
        USER_NAME: req.body.user_name,
        PASSWORD: hashedPassword,
        USER_ID: savedUser._id,
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
  // generate access token

  // Login
  loginUser: async (req, res) => {
    try {
      const { error } = loginUserSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
      const loginAccount = await account.findOne({
        USER_NAME: req.body.user_name,
      });
      if (!loginAccount) {
        return res.status(404).json({
          message: "wrong username",
        });
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        loginAccount.PASSWORD
      );
      if (!validPassword) {
        return res.status(400).json({
          message: "wrong password",
        });
      }
      if (loginAccount && validPassword) {
        const accessToken = jwt.sign(
          {
            id: loginAccount.id,
            admin: loginAccount.OBJECT_ROLE.IS_ADMIN,
          },
          process.env.JWT_ACCESS_KEY, // key để đăng nhập vào
          { expiresIn: "1h" } // thời gian token hết hạn
        );
        const refreshToken = jwt.sign(
          {
            id: loginAccount.id,
            admin: loginAccount.OBJECT_ROLE.IS_ADMIN,
          },
          process.env.JWT_REFRESH_KEY, // key để đăng nhập vào
          { expiresIn: "365d" } // thời gian token hết hạn
        );
        const { password, ...others } = loginAccount._doc; // bỏ password ra khỏi res
        res.status(200).json({ ...others, accessToken, refreshToken });
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
