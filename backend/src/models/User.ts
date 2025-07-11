import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  userId: string;
  name: string;
  email: string;
}

const UserSchema: Schema = new Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

export default mongoose.model<IUser>('User', UserSchema); 