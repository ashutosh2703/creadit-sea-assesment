import express from 'express';
import Event from '../models/Event';

const router = express.Router();

// POST /api/events - Ingest one or many events
router.post('/', async (req, res) => {
  try {
    const events = Array.isArray(req.body) ? req.body : [req.body];
    const saved = await Event.insertMany(events);
    res.status(201).json({ inserted: saved.length });
  } catch (err) {
    res.status(400).json({ error: 'Invalid event data', details: err });
  }
});

export default router; 