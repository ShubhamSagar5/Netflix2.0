const mongoose = require('mongoose') 
const { MONGO_URL } = require('../../Secret')


const DBConnection = async() => {

    await mongoose.connect(MONGO_URL)

}

module.exports = DBConnection