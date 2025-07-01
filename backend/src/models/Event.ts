import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  userId: string;
  sessionId: string;
  page: string;
  eventType: 'page_visit' | 'click' | 'form_submission';
  eventData: any;
  timestamp: Date;
}

const EventSchema: Schema = new Schema({
  userId: { type: String, required: true },
  sessionId: { type: String, required: true },
  page: { type: String, required: true },
  eventType: { type: String, enum: ['page_visit', 'click', 'form_submission'], required: true },
  eventData: { type: Schema.Types.Mixed },
  timestamp: { type: Date, required: true, default: Date.now }
});

export default mongoose.model<IEvent>('Event', EventSchema); 