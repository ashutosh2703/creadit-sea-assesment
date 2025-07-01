import mongoose from 'mongoose';
import { connectDB } from '../src/database';
import User from '../src/models/User';
import Session from '../src/models/Session';
import Event from '../src/models/Event';

const users = [
  { userId: 'u1', name: 'Alice', email: 'alice@example.com' },
  { userId: 'u2', name: 'Bob', email: 'bob@example.com' },
];

const sessions = [
  { sessionId: 's1', userId: 'u1', startedAt: new Date(Date.now() - 1000 * 60 * 60) },
  { sessionId: 's2', userId: 'u2', startedAt: new Date(Date.now() - 1000 * 60 * 30) },
];

const events = [
  { userId: 'u1', sessionId: 's1', page: '/home', eventType: 'page_visit', eventData: {}, timestamp: new Date(Date.now() - 1000 * 60 * 59) },
  { userId: 'u1', sessionId: 's1', page: '/about', eventType: 'click', eventData: { button: 'Learn More' }, timestamp: new Date(Date.now() - 1000 * 60 * 58) },
  { userId: 'u2', sessionId: 's2', page: '/contact', eventType: 'form_submission', eventData: { form: 'Contact Us' }, timestamp: new Date(Date.now() - 1000 * 60 * 29) },
];

const seed = async () => {
  await connectDB();
  await User.deleteMany({});
  await Session.deleteMany({});
  await Event.deleteMany({});
  await User.insertMany(users);
  await Session.insertMany(sessions);
  await Event.insertMany(events);
  console.log('Seeded sample data');
  mongoose.disconnect();
};

seed(); 