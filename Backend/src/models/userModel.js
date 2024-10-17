const mongoose = require('mongoose')
const validator = require('validator') 




const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Please Provide valid email")
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Please Provide Strong Password")
            }
        }

    }
},{
    timestamps:true
})




const User = mongoose.model("User",userSchema)  


module.exports = User