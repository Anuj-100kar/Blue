const pool = require('./config/db');

(async () => {
  try {
    const res = await pool.query("SELECT * FROM admins");
    console.log("Admins data:", res.rows);
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    process.exit();
  }
})();