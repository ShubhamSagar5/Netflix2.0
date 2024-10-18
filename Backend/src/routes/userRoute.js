const express = require('express') 
const { registerNewUser, logIn, logout } = require('../controller/userController')


const userRouter = express.Router()


userRouter.post("/register",registerNewUser)
userRouter.post("/login",logIn)
userRouter.post("/logout",logout)


module.exports = userRouter