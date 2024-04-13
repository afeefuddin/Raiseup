const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user') 

const app = express();

app.use(cors({
    origin : "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,OPTIONS,DELETE",
    credentials: true
}))



app.use(userRouter)

app.listen(5000,()=>{
    console.log("Server Started at port 5000")
})