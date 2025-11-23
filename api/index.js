const express = require('express');
const app = express();

// Page 1: The Home Page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Home Page</title>
        <style>body { font-family: sans-serif; padding: 20px; }</style>
      </head>
      <body>
        <h1>Welcome to the Home Page</h1>
        <p>This is the first page of my Vercel application ready for tests.</p>
        <a href="/about">Go to About Page</a>
      </body>
    </html>
  `);
});

// Page 2: The About Page
app.get('/about', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>About Page</title>
        <style>body { font-family: sans-serif; padding: 20px; background-color: #f0f0f0; }</style>
      </head>
      <body>
        <h1>About Us</h1>
        <p>This is the second internet page served by Node.js.</p>
        <a href="/">Back to Home</a>
      </body>
    </html>
  `);
});

// Export the app for Vercel (Serverless)
module.exports = app;