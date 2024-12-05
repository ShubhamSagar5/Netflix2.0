const mongoose = require('mongoose') 
const { MONGO_URL } = require('../../Secret')


const DBConnection = async() => {

    await mongoose.connect(process.env.MONGO_URL)

}

module.exports = DBConnection