require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const feedbackRoutes = require('./api/routes/feedbackRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/uploads/images', express.static('uploads/images'));

// MongoDB Connection
mongoose.connect('mongodb://0.0.0.0:27017/feedback');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Routes
app.use('/api/feedback', feedbackRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
