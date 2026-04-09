const pool = require('./config/db');

(async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS admins (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE,
        password TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ Admins table created successfully");
  } catch (err) {
    console.error("❌ Error creating table:", err.message);
  } finally {
    process.exit();
  }
})();