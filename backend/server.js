// backend/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

// In-memory data storage for summaries and comments
let summaries = [];

// API to fetch all summaries
app.get('/summaries', (req, res) => {
    res.json(summaries);
});

// API to add a new summary
app.post('/summaries', (req, res) => {
    const { week, summary, comments } = req.body;
    const id = summaries.length ? summaries[summaries.length - 1].id + 1 : 1;
    summaries.push({ id, week, summary, comments });
    res.json({ message: 'Summary added successfully', summaries });
});

// API to delete a summary by ID
app.delete('/summaries/:id', (req, res) => {
    const id = parseInt(req.params.id);
    summaries = summaries.filter((summary) => summary.id !== id);
    res.json({ message: 'Summary deleted successfully', summaries });
});

// API to add a comment to a specific summary
app.post('/summaries/:id/comments', (req, res) => {
    const id = parseInt(req.params.id);
    const { comment } = req.body;
    const summary = summaries.find((s) => s.id === id);

    if (summary) {
        summary.comments.push(comment);
        res.json({ message: 'Comment added successfully', summaries });
    } else {
        res.status(404).json({ message: 'Summary not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
