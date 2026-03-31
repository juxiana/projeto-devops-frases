const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

const pool = new Pool({
    host: 'db', 
    database: 'frasesdb',
    user: 'user',
    password: 'password',
    port: 5432,
});

app.get('/frase', async (req, res) => {
    try {
        const result = await pool.query('SELECT texto FROM frases ORDER BY RANDOM() LIMIT 1');
res.json({ frase: result.rows[0].texto }); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Rota de teste
app.get('/test', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'API Node.js Online' });
});

app.listen(5000, () => console.log('API rodando na porta 5000'));