const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "Hello World! Votre application Node.js fonctionne parfaitement dans",
        timestamp: new Date()
    });
});

app.get('/health', (req, res) => {
    res.json({ status: "UP" });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
