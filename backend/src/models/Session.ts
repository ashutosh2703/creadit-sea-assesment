import mongoose, { Schema, Document } from 'mongoose';

export interface ISession extends Document {
  sessionId: string;
  userId: string;
  startedAt: Date;
}

const SessionSchema: Schema = new Schema({
  sessionId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  startedAt: { type: Date, required: true }
});

export default mongoose.model<ISession>('Session', SessionSchema); 