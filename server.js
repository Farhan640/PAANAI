const express = require('express');
require('dotenv').config();
const goldRoute = require('./routes/gold');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/gold', goldRoute);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
