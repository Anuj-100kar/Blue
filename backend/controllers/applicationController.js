const pool = require("../config/db");

const applyIPO = async (req, res) => {
  const { ipo_id, quantity, upi_id } = req.body;

  try {
    await pool.query(
      "INSERT INTO applications (ipo_id, quantity, upi_id) VALUES ($1,$2,$3)",
      [ipo_id, quantity, upi_id]
    );

    res.json({ message: "Applied Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

const getApplications = async (req, res) => {
  const result = await pool.query("SELECT * FROM applications ORDER BY id DESC");
  res.json(result.rows);
};

module.exports = { applyIPO ,getApplications};