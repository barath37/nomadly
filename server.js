require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Travel Buddy Schema
const buddySchema = new mongoose.Schema({
    name: String,
    destination: String,
    travelDates: String
});
const Buddy = mongoose.model('Buddy', buddySchema);

// Basic Route
app.get('/', (req, res) => {
    res.send('Welcome to the Travel Buddy Finder API!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));