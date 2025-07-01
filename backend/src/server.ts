import express from 'express';
import cors from 'cors';
import { connectDB } from './database';
import eventsRouter from './routes/events';
import analyticsRouter from './routes/analytics';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// TODO: Mount event and analytics routes
app.use('/api/events', eventsRouter);
app.use('/api/analytics', analyticsRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}); 