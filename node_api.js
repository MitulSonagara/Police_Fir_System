const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
    // Handle request and send response
    res.json({ message: 'Hello from Node.js!' });
});

app.listen(port, () => {
    console.log(`Node.js server is running on port ${port}`);
});
