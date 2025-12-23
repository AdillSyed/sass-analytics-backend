const express = require("express");

const app = express();  // Initialize Express application.

app.use(express.json());  // Middleware to parse JSON request bodies.

// Health check endpoint

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

const pool = require("./db");

app.get("/db-test", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows[0]);
});


module.exports = app;  // Export the app for use in other parts of the application.
