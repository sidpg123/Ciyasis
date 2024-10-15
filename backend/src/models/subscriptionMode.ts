import { Schema, model, Document } from 'mongoose';

// Interface for Subscription document
interface ISubscription extends Document {
    userId: Schema.Types.ObjectId;
    subscriptionId: string;
    isSubscribed: boolean;
    subscriptionDate: Date;
    boughtAt: Date;
}

// Define the Subscription schema
const subscriptionSchema = new Schema<ISubscription>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    subscriptionId: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

// Create the Subscription model
const Subscription = model<ISubscription>('Subscription', subscriptionSchema);

export default Subscription;
