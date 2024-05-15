const account = require("../models/account");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const User = await account.find().populate("user_id");
      res.status(200).json(User);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
};
module.exports = userController;
