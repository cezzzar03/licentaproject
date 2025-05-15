const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);

app.listen(3001, () => {
  console.log('✅ Server pornit pe http://localhost:3001');
});


//coingecko cache
let coinCache = [];
let lastUpdated = null;

async function updateCoinCache() {
  try {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 20,
        page: 1,
        sparkline: false,
      },
    });

    coinCache = res.data;
    lastUpdated = new Date().toISOString();
    console.log('✅ Coin cache actualizat:', lastUpdated);
    console.log("💵 Nou preț BTC:", res.data[0].current_price);

  } catch (err) {
    console.error('❌ Eroare CoinGecko:', err.message);
  }
}

updateCoinCache();
setInterval(updateCoinCache, 60000);

app.get('/api/coins', (req, res) => {
  if (coinCache.length === 0) {
    return res.status(503).json({ error: 'Datele nu sunt încă disponibile.' });
  }

  res.json({
    updatedAt: lastUpdated,
    data: coinCache,
  });
});