const express = require("express");
const cors = require("cors");
const db = require("./db.js"); // ← your db.js file
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Route to handle signup form
app.post("/add-user", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  try {
    const [result] = await db.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );

    res.status(200).json({ message: "✅ User added successfully!", id: result.insertId });
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ✅ New route: Get all users
app.get("/users", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    res.status(200).json(rows);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ✅ Run server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
