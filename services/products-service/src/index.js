const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");


const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3000;



const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "ecommerce",
  port: process.env.DB_PORT || 5432,
  max: 10,       // Maximum number of connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});


app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});




app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT NOW()");
    res.json({status: "ok", service: "products-service"});
  } catch (error) {
    res.status(500).json({ error: "Database connection failed" });
  };
});



app.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.get("/products/:id", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.listen(PORT, () => {
  console.log(`Products Service running on port ${PORT}`);
});
