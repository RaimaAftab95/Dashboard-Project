// Create MySQL connection pool
const express = require("express");
const mysql = require("mysql2/promise");
const app = express();

app.use(express.json());
require("dotenv").config();

const mysqlPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  
  // Check MySQL connection when the app starts
  (async () => {
    try {
      const connection = await mysqlPool.getConnection();
      console.log("Connected to MySQL successfully");
      connection.release();
    } catch (err) {
      console.error("Error connecting to MySQL:", err.message);
    }
  })();