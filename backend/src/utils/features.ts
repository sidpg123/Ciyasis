import mongoose from "mongoose";
import  dotenv  from "dotenv";


export const cookieOptions = {
    maxAge: 30 * 24* 60 * 1000,
    sameSite: false,
    httpOnly: true,
    secure: true
}


dotenv.config({
    path: "./.env",
  });


const mongoURI = process.env.MONGO_URI;
console.log(mongoURI)

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI as string);
    console.log('MongoDB connected!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;




// export const setCookie = (res: Response, userId: string, message: string) => {
    
//     const token = jwt.sign({ _id: userId }, process.env.JWT_SECRET as string);
    
//     console.log(userId);
    
//     res.status(200).cookie("chat-cookie", token, cookieOptions).json({
//         success: true,
//         message: message    
//     })
    
// }