// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Route takes you to home page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

// Route takes you to notes page after clicking 'Get Started'
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

// Route connecting db.json
app.get('/api/notes', (req, res) => res.json(__dirname, './db/db.json'));

// Route to post new notes to notes page

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));