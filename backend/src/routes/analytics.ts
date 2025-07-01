import express from 'express';
import Event from '../models/Event';

const router = express.Router();

// GET /api/analytics - Aggregated analytics with filters
router.get('/', async (req, res) => {
  try {
    const { userId, sessionId, page, start, end } = req.query;
    const match: any = {};
    if (userId) match.userId = userId;
    if (sessionId) match.sessionId = sessionId;
    if (page) match.page = page;
    if (start || end) match.timestamp = {};
    if (start) match.timestamp.$gte = new Date(start as string);
    if (end) match.timestamp.$lte = new Date(end as string);

    const agg = [
      { $match: match },
      {
        $group: {
          _id: {
            eventType: '$eventType',
            page: '$page',
            userId: '$userId',
            sessionId: '$sessionId'
          },
          count: { $sum: 1 },
          first: { $min: '$timestamp' },
          last: { $max: '$timestamp' }
        }
      }
    ];
    const results = await Event.aggregate(agg);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Analytics error', details: err });
  }
});

export default router; 