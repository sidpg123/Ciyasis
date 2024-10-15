import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  phoneNumber: string;
}


const userSchema = new Schema<IUser>({
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, 'Phone number must be a valid 10-digit number'],
  },
}, {
  timestamps: true 
});

const User = model<IUser>('User', userSchema);

export default User;
