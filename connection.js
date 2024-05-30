const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

// Define a route to handle the request
app.get('/data', async (req, res) => {
    try {
        // Fetch data from SerpApi
        const apiKey = 'bcff6a496a0105cffaab873d2769048f8373cdb29aabc2fd6cdd39ea6f828823';
        const url = `https://serpapi.com/search.json?engine=google_play_games&api_key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        // Send an error response
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/app', async (req, res) => {
    try {
        // Fetch data from SerpApi
        const apiKey = 'bcff6a496a0105cffaab873d2769048f8373cdb29aabc2fd6cdd39ea6f828823';
        const url = `https://serpapi.com/search.json?engine=google_play&section_page_token=Yl4SFwoCCAEQOxoLQVBQTElDQVRJT04qAggBSj4KPAgUEIzG5P8JEKKbgbsDEMOLqYoLEPenl5kCELnOy8QDEOKaiZgDEPf26K4KELvElRQQ5dfrQRDmyLG7AVAU-AEA&api_key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        // Send an error response
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/movies', async (req, res) => {
    try {
        // Fetch data from SerpApi
        const apiKey = 'bcff6a496a0105cffaab873d2769048f8373cdb29aabc2fd6cdd39ea6f828823';
        const url = `https://serpapi.com/search.json?engine=google_play_movies&api_key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        // Send an error response
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/books', async (req, res) => {
    try {
        // Fetch data from SerpApi
        const apiKey = 'bcff6a496a0105cffaab873d2769048f8373cdb29aabc2fd6cdd39ea6f828823';
        const url = `https://serpapi.com/search.json?engine=google_play_books&api_key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        // Send an error response
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
