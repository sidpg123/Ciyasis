import express from "express";
import { handleCheckOtp, handleGetOtp } from "../controllers/userController";

const app = express.Router();

app.get('/', (req, res) => {
    res.send("hello siddharth patil")
})

app.post('/getotp',(req,res)=>{
    handleGetOtp(req,res)
})

app.post('/checkotp',(req,res)=>{
    handleCheckOtp(req,res)
})
export default app; 