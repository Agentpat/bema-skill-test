const express = require('express');
const router = express.Router();
const ReversedName = require('../models/ReversedName');

// POST /api/names - save reversed name
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ error: 'Name is required and must be a string' });
    }
    const reversed = name.split('').reverse().join('');

    // Upsert: update if exists, otherwise insert
    const saved = await ReversedName.findOneAndUpdate(
      {}, // No filter to keep single doc (or you can filter by user/session)
      { name, reversed },
      { upsert: true, new: true }
    );

    res.json({ reversed: saved.reversed });
  } catch (err) {
    console.error('Error saving reversed name:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/names - get last reversed name
router.get('/', async (req, res) => {
  try {
    const data = await ReversedName.findOne({});
    res.json({ reversed: data ? data.reversed : '' });
  } catch (err) {
    console.error('Error fetching reversed name:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
