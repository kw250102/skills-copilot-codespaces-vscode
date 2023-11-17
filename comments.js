// Create Web Server using Express.js
// Run using nodemon

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get comments
app.get('/comments', (req, res) => {
    console.log('GET /comments');
    res.json({ comments: 'GET /comments' });
});

// Create comment
app.post('/comments', (req, res) => {
    console.log('POST /comments');
    console.log(req.body);
    res.json({ comments: 'POST /comments' });
});

// Update comment
app.put('/comments/:id', (req, res) => {
    console.log('PUT /comments/:id');
    console.log(req.body);
    res.json({ comments: 'PUT /comments/:id' });
});

// Delete comment
app.delete('/comments/:id', (req, res) => {
    console.log('DELETE /comments/:id');
    console.log(req.body);
    res.json({ comments: 'DELETE /comments/:id' });
});

// Start server
app.listen(port, () => console.log(`Server listening on port ${port}!`));
