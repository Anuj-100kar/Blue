const express = require('express');
const router = express.Router();
const pool = require('../db'); // your PostgreSQL pool connection

router.post('/', async (req, res) => {
  try {
    const {
      name,
      priceBand,
      openDate,
      closeDate,
      issueSize,
      issueType,
      listingDate,
      status
    } = req.body;

    const result = await pool.query(
      `INSERT INTO ipo (name, price_band, open_date, close_date, issue_size, issue_type, listing_date, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [name, priceBand, openDate, closeDate, issueSize, issueType, listingDate, status]
    );

    res.status(201).json({ message: 'IPO added successfully' });
  } catch (error) {
    console.error('Error inserting IPO:', error);
    res.status(500).json({ error: 'Failed to add IPO' });
  }
});

module.exports = router;
