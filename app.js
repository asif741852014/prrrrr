// Import the Express module
const express = require('express');
const app = express();

// Define a route that responds to GET requests at the root URL
app.get('/', (req, res) => {
    res.send('Hello, World from Express!');
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});