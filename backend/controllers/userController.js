const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

// ================= REGISTER =================
const register = async (req, res) => {
  const { firstName, lastName , email, password } = req.body;

  // ✅ Validation
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // ✅ Check if email already exists
    const existing = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existing.rows.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Insert into DB
    const result = await pool.query(
      "INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3 ,$4) RETURNING id, firstname ,lastname , email",
      [firstName, lastName , email, hashedPassword]
    );

    res.status(201).json({
      message: "User registered successfully",
      user: result.rows[0],
    });

  } catch (error) {
    console.error("Register Error:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// ================= LOGIN =================
const login = async (req, res) => {
  const { email, password } = req.body;

  // ✅ Validation
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // ✅ Check if user exists
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = result.rows[0];

    // ✅ Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // ✅ Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email ,role:"user"},
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        firstname:user.firstname,
        lastname: user.lastname,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// ================= FORGOT PASSWORD =================
const forgotpassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // (Dummy for now)
  res.json({ message: `Password reset link sent to ${email}` });
};

module.exports = { register, login, forgotpassword };