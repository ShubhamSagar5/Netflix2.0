const express = require('express') 
const { registerNewUser } = require('../controller/userController')


const userRouter = express.Router()


userRouter.post("/register",registerNewUser) 


module.exports = userRouter