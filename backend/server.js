import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from 'cors'
import cookieParser from "cookie-parser"
import Routing from './routes/index.js'

const app = express()
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.use(cors());
app.use(express.json())
dotenv.config()
app.use(cookieParser());

app.use("/api/v1",Routing)



mongoose.connect(process.env.MONGODBURL).then(()=>{console.log("Mongo Connected")})

app.listen(process.env.PORT,()=>{
    console.log("Running on port 8000")
})