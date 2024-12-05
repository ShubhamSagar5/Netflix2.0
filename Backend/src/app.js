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
    origin:"*",
    credentials:true
}))

app.use(express.json())
app.use(cookieParser()) 

app.use("/api/v1",userRouter)
app.use("/",(req,res)=>{
    res.send("Hello from backend")    
})

DBConnection() 
.then(()=>{
    console.log("Database Connected Successfully")
    app.listen(PORT,() => {
        console.log("Server is successfully listening on port " + process.env.PORT)
    })
})
.catch((err)=>{
    console.log(err.message)
})



