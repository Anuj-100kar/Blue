const express = require("express");
const cors = require("cors");
const pool = require('./config/db');
const path = require('path');



const app = express();

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const ipoRoutes = require("./routes/ipoRoutes");
app.use("/api/ipo", ipoRoutes);
app.use('/api/admin',require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
