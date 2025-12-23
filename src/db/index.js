const { Pool } = require("pg"); // Import the Pool class from the pg module.

// A connection pool maintains multiple reusable database connections.
// so every request doesn’t open and close a new one. 
const pool = new Pool({  // Create a new PostgreSQL connection pool using environment variables.
  host: process.env.DB_HOST,  // Database host 
  port: process.env.DB_PORT,  // Database port
  database: process.env.DB_NAME,  // Database name
  user: process.env.DB_USER, // Database user
  password: process.env.DB_PASSWORD, // Database password
});

pool.on("connect", () => {  // Log when connected to the database.
  console.log("PostgreSQL connected");
});

module.exports = pool;  // Export the pool for use in other parts of the application.
