const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// Middleware
app.use(express.json());

// Routes
const courseRoutes = require('./routes/courseRoutes');
const programRoutes = require('./routes/programRoutes');
const studentRoutes = require('./routes/studentRoutes');

app.use('/api/courses', courseRoutes);
app.use('/api/programs', programRoutes);
app.use('/api/students', studentRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

module.exports = app;
