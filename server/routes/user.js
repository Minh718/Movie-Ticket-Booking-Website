const userRouter = require('express').Router()
const userController = require('../controllers/userController')

userRouter.post("/register",userController.registerUser);
userRouter.post("/",userController.getUser);+
userRouter.post("/login",userController.loginUser); 
userRouter.post("/logout",userController.logoutUser); 

module.exports = userRouter;
