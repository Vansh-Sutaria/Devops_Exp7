const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({ message: 'Hello from CI/CD demo!' }));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;
