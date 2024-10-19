const express = require('express') 
const dotenv = require('dotenv')
const DBConnection = require('./config/DatabaseConnection')
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/userRoute')
const { PORT } = require('../Secret')
const cors = require('cors')

const app = express() 


dotenv.config({
    path:"./.env"
})

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))

app.use(express.json())
app.use(cookieParser()) 

app.use("/api/v1",userRouter)

DBConnection() 
.then(()=>{
    console.log("Database Connected Successfully")
    app.listen(PORT,() => {
        console.log("Server is successfully listening on port " + PORT)
    })
})
.catch((err)=>{
    console.log(err.message)
})



