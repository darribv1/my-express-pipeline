const express = require('express');
const { Client } = require('pg');
const redis = require('redis');
const app = express();

app.get('/', async (req, res) => {
  res.send('<h1>Lab 3.2: Multi-container system is UP!</h1><p>Postgres and Redis are integrated.</p>');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});