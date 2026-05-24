const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('<h1>Hello from CI/CD!</h1><p>Assignment 3.1 is officially working.</p>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});