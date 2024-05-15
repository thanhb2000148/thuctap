const jwt = require("jsonwebtoken");
const middlewareController = {
  verityToken: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1]; // bỏ khoảng trắng và lấy từ kí tự số 1
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) {
          return res.status(403).json("token is not valid");
        }
        req.user = user;
        next();
      });
    } else {
      return res.status(403).json("you are not authenticated");
    }
  },
};
module.exports = middlewareController;
