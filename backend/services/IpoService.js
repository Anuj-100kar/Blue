// services/ipoService.js
const axios = require("axios");

const fetchLiveIPOs = async () => {
  const response = await axios.get(
    "https://indian-ipos1.p.rapidapi.com/closed-ipos",
    {
      headers: {
        "x-rapidapi-key": process.env.RAPID_API_KEY,
        "x-rapidapi-host": "indian-ipos1.p.rapidapi.com",
      },
    }
  );

  return response.data;
};

module.exports = { fetchLiveIPOs };

////fsjfosifns