const User = require("../models/userModel")
const bcrypt = require('bcrypt')


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
            message:'you are register successfully',
            data:registerNewUser
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
} 


module.exports = {
    registerNewUser
}