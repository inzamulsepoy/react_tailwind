const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "user",
  database: "myappdb", // replace with your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

(async () => {
  try {
    const conn = await db.getConnection();
    console.log("✅ Connected to MariaDB database");
    conn.release();
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
})();

module.exports = db;
