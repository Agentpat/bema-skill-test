const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const blogRoutes = require('./routes/blog');
const settingsRoutes = require('./routes/settings');
const nameRoutes = require('./routes/names');

const app = express();
const PORT = process.env.PORT || 5000;

// Set up CORS to allow requests from your frontend domain
const allowedOrigins = [
  'https://client-lime-one-35.vercel.app',
  'http://localhost:3000',  // For local development, if needed
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin like mobile apps or curl requests
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/posts', blogRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/names', nameRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));
