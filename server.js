require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.json());

// This tells the backend to load your frontend HTML, CSS, and images
app.use(express.static(__dirname));

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

// Backend API Route (For your assignment requirements)
app.get('/api/buddies', async (req, res) => {
    const buddies = await Buddy.find();
    res.json(buddies);
});

// Frontend Route: Show the website homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));