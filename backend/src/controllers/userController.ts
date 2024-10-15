import { Request, Response } from "express";
import User from "../models/userModel";
import jwt from 'jsonwebtoken';

const handleGetOtp = async (req: Request, res: Response) => {
    try {
        const { phone } = req.body;
        console.log("request receiced" , req.body);
        

        if (!phone) {
            return res.status(400).json({ message: 'Phone number is required' });
        }

        // Verify if phone number is valid (basic regex for demo purposes)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({ message: 'Invalid phone number' });
        }

        // Simulate sending OTP (in production, integrate actual OTP service)
        const otp = '000000'; // For demo, fixed OTP

        return res.json({ message: 'OTP sent successfully', otp }); // Do not send actual OTP in production
    } catch (error) {
        console.error('Error in handleGetOtp:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const handleCheckOtp = async (req: Request, res: Response) => {
    try {
        const { otp, phone } = req.body;

        if (!otp || !phone) {
            return res.status(400).json({ message: 'OTP and phone number are required' });
        }

        // Check if OTP is correct
        if (otp !== '000000') {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        // Check if phone number exists in DB
        let user = await User.findOne({ phoneNumber:phone });

        if (user) {
            // If phone exists, generate token
            const token = jwt.sign({ phone }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
            return res.json({ token, loggedIn: true });
        } else {
            // If phone doesn't exist, create an entry and send loggedIn: false
            user = new User({ phoneNumber:phone });
            await user.save();
            return res.json({ phone, loggedIn: false });
        }
    } catch (error) {
        console.error('Error in handleCheckOtp:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export {
    handleCheckOtp,
    handleGetOtp
}
