const { createMapping } = require('./src/giftMapping.js');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const playerList = ["Johan", "Axel", "Elisabeth"];
const mapping = createMapping(playerList);

app.use(cors());
app.use(express.json()); 

app.get('/api/gift-mapping', (req, res) => {
    res.json(mapping);
});

app.get('/test', (req, res) => {
    res.json({ message: 'Test route is working' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});