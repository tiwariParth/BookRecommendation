import mongoose, { Schema, Document } from 'mongoose';

export interface BookDocument extends Document {
  title: string;
  author: string;
  description: string;
  rating: number;
  userId: string; 
}

const bookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
});

export default mongoose.model<BookDocument>('Book', bookSchema);
