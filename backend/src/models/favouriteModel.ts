import { Schema, model, Document } from 'mongoose';

// Interface for Favorites document
interface IFavorites extends Document {
  userId: Schema.Types.ObjectId;
  productId: Schema.Types.ObjectId;
}

// Define the Favorites schema
const favoritesSchema = new Schema<IFavorites>({
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

// Create the Favorites model
const Favorites = model<IFavorites>('Favorites', favoritesSchema);

export default Favorites;
