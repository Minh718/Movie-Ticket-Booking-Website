const userRouter = require("express").Router();
const userController = require("../controllers/userController");

userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.loginUser);
userRouter.post("/update_info", userController.updateUserInfo);

module.exports = userRouter;
