import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const API_KEY = '3c23f2b6cf664b9d8f5fd14f85db7049';

app.get('/api/geocode', async (req, res) => {
    const { text } = req.query;
    
    if (!text) {
        return res.status(400).json({ error: 'Text parameter is required' });
    }

    try {
        const response = await fetch(
            `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=${API_KEY}`
        );
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3001, () => {
    console.log('Geoapify proxy server running on http://localhost:3001');
});
