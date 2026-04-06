const db = require("../config/db");

// Create user
exports.createUser = async (name, email, password) => {
  return await db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password]
  );
};

// Find user by email
exports.findUserByEmail = async (email) => {
  const [rows] = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  return rows[0];
};

// Find user by ID
exports.findUserById = async (id) => {
  const [rows] = await db.query(
    "SELECT id, name, email, role FROM users WHERE id = ?",
    [id]
  );
  return rows[0];
};