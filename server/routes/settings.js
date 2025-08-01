const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ currency: 'NGN' });
});

module.exports = router;
