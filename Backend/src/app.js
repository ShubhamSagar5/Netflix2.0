const express = require('express') 
const dotenv = require('dotenv')
const DBConnection = require('./config/DatabaseConnection')
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/userRoute')

const app = express() 


dotenv.config({
    path:"./.env"
})

app.use(express.json())
app.use(cookieParser()) 

app.use("/api/v1",userRouter)

DBConnection() 
.then(()=>{
    console.log("Database Connected Successfully")
    app.listen(process.env.PORT,() => {
        console.log("Server is successfully listening on port " + process.env.PORT)
    })
})
.catch((err)=>{
    console.log(err.message)
})



