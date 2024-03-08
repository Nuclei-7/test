// Import required modules
const express = require('express');

// Create an instance of express
const app = express();

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Define the port number
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
