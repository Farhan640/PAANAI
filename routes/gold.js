const express = require('express');
const router = express.Router();
const fetchGoldPrice = require('../services/fetchGoldPrice');

router.get('/', async (req, res) => {
  try {
    const data = await fetchGoldPrice();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal dapatkan data harga emas' });
  }
});

module.exports = router;
