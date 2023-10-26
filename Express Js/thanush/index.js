/**
 * @file A simple Express.js app that responds with "Hi" on the root route.
 * @module app
 */

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/**
 * A route that responds with "Hi" when a user routes to the root URL.
 *
 * @name GET /
 * @function
 * @memberof module:app
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
app.get('/', (req, res) => {
  res.send('Hi');
});

/**
 * Start the Express app.
 *
 * @function
 * @memberof module:app
 */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// to run this file , open root folder , node index.js