const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
const MONGO_URI = 'mongodb+srv://NepalNirvana:nepalnirvana@nepalnirvanausers.xel0r.mongodb.net/?retryWrites=true&w=majority&appName=NepalNirvanaUsers'; // Replace with your MongoDB URI
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Routes
app.use('/api/auth', authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
