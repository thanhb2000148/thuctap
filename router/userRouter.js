const userController = require("../controllers/userController");
const middlewareController = require("../controllers/middlewareController");
const router = require("express").Router();
router.get("/", middlewareController.verityToken, userController.getAllUsers);
router.get("/:id", userController.getAUser);
router.delete("/:id", userController.deleteUser);
module.exports = router;
