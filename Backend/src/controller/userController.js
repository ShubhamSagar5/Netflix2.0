const User = require("../models/userModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {JET_SECRET } = require("../../Secret")

const registerNewUser = async(req,res) => {
    try {
        
        const {fullName,email,password} = req.body 

        if(!fullName || !email || !password){
            return res.status(401).json({
                success:false,
                message:"All Field Required"
            })
        }

        const user = await User.findOne({email}) 

        if(user){
            return res.status(401).json({
                success:false,
                message:"User Already register with this email id"
            })
        }

        const hashPassword = await bcrypt.hash(password,10)

       const registerUser =  await User({
            fullName,
            email,
            password:hashPassword
        })
        

        await registerUser.save()

        return res.status(200).json({
            success:true,
            message:'Account Created Successfully',
            data:registerNewUser
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
} 

const logIn = async(req,res) => {
    
    try {
        
        const {email,password} = req.body 

        if(!email || !password){
            return res.status(401).json({
                success:false,
                message:"Email and Password Required"
            })
        }

        const user = await User.findOne({email})

        if(!user){
            return res.status(401).json({
                sucess:false,
                message:"Invalid email and password and user not found"
            })
        }

        const isPasswordMatch = await bcrypt.compare(password,user.password) 

        if(!isPasswordMatch){
            return res.status(401).json({
                success:false,
                message:"Inavlid email and password and password not match"
            })
        }

        const payloadData = {
            id:user._id
        }

        const getJwt = await jwt.sign(payloadData,process.env.JET_SECRET,{expiresIn:"1d"}) 
      

        return res.status(200).cookie("token",getJwt,{httpOnly:true}).json({
            success:true,
            message:`Welcome back ${user.fullName}`,
            user
        }) 

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const logout = async(req,res) => {
    try {
        
        return res.status(200).clearCookie("token",{httpOnly:true}).json({
            success:true,
            message:'You are Logout Successfully'
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {
    registerNewUser,
    logIn,
    logout
}