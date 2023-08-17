const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Serve Angular build files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Define the artist schema and model
const artistSchema = new mongoose.Schema({
  name: String,
  monthlyListeners: Number
});

const Artist = mongoose.model('Artist', artistSchema);

// Connect to your MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/spotify', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

app.get('/api/artists', (req, res) => {
  Artist.find({})
    .then(artists => {
      res.json(artists);
    })
    .catch(err => {
      console.error('Failed to retrieve artists:', err);
      res.status(500).json({ error: 'Failed to retrieve artists' });
    });
});

// Redirect all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'angular/dist/index.html'));
});
  
