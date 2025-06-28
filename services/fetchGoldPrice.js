const axios = require('axios');

const fetchGoldPrice = async () => {
  const response = await axios.get('https://www.goldapi.io/api/XAU/USD', {
    headers: {
      'x-access-token': process.env.GOLDAPI_KEY,
      'Content-Type': 'application/json'
    }
  });

  return {
    price: response.data.price,
    timestamp: response.data.timestamp
  };
};

module.exports = fetchGoldPrice;
