import { Schema, model, Document } from 'mongoose';

// Interface for Cart document
interface ICart extends Document {
  userId: Schema.Types.ObjectId;
  productId: Schema.Types.ObjectId;
}

// Define the Cart schema
const cartSchema = new Schema<ICart>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

// Create the Cart model
const Cart = model<ICart>('Cart', cartSchema);

export default Cart;
