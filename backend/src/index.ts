import express from "express";
import  dotenv  from "dotenv";
import connectDB from "./utils/features";
import userRouter from './routes/user'

dotenv.config()

const PORT = process.env.PORT || 3000
connectDB()

const app = express();


app.use(express.json());


app.get('/', (req, res) => {
    res.send("hello siddharth patil")
})

app.use('/user',userRouter )


app.listen(PORT, () => {
    console.log(`server is runnig good on port ${PORT}`);
})