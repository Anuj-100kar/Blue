const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require('path');

console.log("DATABASE_URL VALUE:", process.env.DATABASE_URL);
const pool = require('./config/db');
const app = express();

// Security and Logging Middleware
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); // Allow serving uploads cross-origin if needed
app.use(morgan("common"));

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use("/api/ipo", require('./routes/ipoRoutes'));
app.use('/api/admin',require('./routes/authRoutes'));
app.use('/api/user',require('./routes/userRoutes'));
app.use('/api/early-access',require('./routes/earlyAccess'));
app.use('/api',require('./routes/applicationRoutes'));

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error', error: process.env.NODE_ENV === 'development' ? err.message : undefined });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
