// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const blogRoutes = require('./routes/blog');
const settingsRoutes = require('./routes/settings');
const nameRoutes = require('./routes/names');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/posts', blogRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/names', nameRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.error(err));
