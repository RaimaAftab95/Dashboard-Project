const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
require('dotenv').config();
app.use(bodyParser.json());

// Create MySQL connection pool
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
    console.log('Connected to MySQL successfully');
    connection.release();
  } catch (err) {
    console.error('Error connecting to MySQL:', err.message);
  }
})();

// POST API to save form data
app.post('/api/incomingrequest', async (req, res) => {
  const { date, narration, currency, amount } = req.body;

  if (!date || !narration || !currency || !amount) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const sql = 'INSERT INTO incoming_request (date, narration, currency, amount) VALUES (?, ?, ?, ?)';
  
  try {
    const [results] = await mysqlPool.query(sql, [date, narration, currency, amount]);
    res.status(200).json({ message: 'Data saved successfully!', results });
  } catch (error) {
    console.error('Error saving data:', error.message);
    res.status(500).json({ message: 'Error saving data', error: error.message });
  }
});

// GET API to fetch data from the database
app.get('/api/incomingrequest', async (req, res) => {
  const limit = parseInt(req.query.limit) || 7; // Default to 7 records
  const offset = parseInt(req.query.offset) || 0; // Default to the first page

  const sql = 'SELECT * FROM incoming_request LIMIT ? OFFSET ?';
  try {
    const [results] = await mysqlPool.query(sql, [limit, offset]);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
});
// DELETE API to delete a record by ID
app.delete('/api/incomingrequest/:id', async (req, res) => {
  const { id } = req.params;

  // Ensure id is numeric before proceeding
  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid ID format.' });
  }

  const sql = 'DELETE FROM incoming_request WHERE id = ?';

  try {
    const [results] = await mysqlPool.query(sql, [id]);

    if (results.affectedRows > 0) {
      res.status(200).json({ message: 'Record deleted successfully!' });
    } else {
      res.status(404).json({ message: 'Record not found.' });
    }
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ message: 'Error deleting data', error: error.message });
  }
});

// GET API to fetch total record count
app.get('/api/incomingrequest/count', async (req, res) => {
  const sql = 'SELECT COUNT(*) as count FROM incoming_request';

  try {
    const [results] = await mysqlPool.query(sql);
    res.status(200).json(results[0].count);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching total records count', error });
  }
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
