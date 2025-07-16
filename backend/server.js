const express = require('express');
const cors = require('cors');
require('dotenv').config();
const ipoRoutes = require('./routes/ipoRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect routes
app.use('/api/ipo', ipoRoutes);

app.get('/', (req, res) => {
  res.send('IPO API is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
