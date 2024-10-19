const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const { check, validationResult } = require('express-validator');
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
//-----------------------api for company name--------------------------------------------------

app.post('/api/company', async (req, res) => {
  const { company_name, enrollment_no } = req.body;

  const query = `INSERT INTO companies (company_name, enrollment_no) VALUES (?, ?)`;
  try {
    const [results] = await mysqlPool.query(query, [company_name, enrollment_no]);
    res.status(200).json({ message: 'Data saved successfully!', results });
  } catch (error) {
    console.error('Error saving data:', error.message);
    res.status(500).json({ message: 'Error saving data', error: error.message });
  }
});

// Route to fetch all companies
app.get('/api/companies',async (req, res) => {
  const query = 'SELECT * FROM companies';

  try {
    const [results] = await mysqlPool.query(query);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
});
app.delete('/api/companies/:id', async (req, res) => {
  const { id } = req.params;

  // Ensure id is numeric before proceeding
  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid ID format.' });
  }

  const sql = 'DELETE FROM companies WHERE id = ?';

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
//-----------------------api hgo company-------------------------------------------------------
app.post('/api/company_hgo', async (req, res) => {
  const { company_name, enrollment_no } = req.body;

  const query = `INSERT INTO companies_hgo (company_name, enrollment_no) VALUES (?, ?)`;
  try {
    const [results] = await mysqlPool.query(query, [company_name, enrollment_no]);
    res.status(200).json({ message: 'Data saved successfully!', results });
  } catch (error) {
    console.error('Error saving data:', error.message);
    res.status(500).json({ message: 'Error saving data', error: error.message });
  }
});
//-----------------------api for signUp---------------------------------------------------------
app.post('/api/signup', [
  check('email').isEmail().withMessage('Enter a valid email address'),
  check('newPassword').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  
  // Validate accountName
  check('accountName').notEmpty().withMessage('Account Name is required'),
  
  // Validate phone number (adjust the regex for your specific phone number format)
  check('phone').isMobilePhone().withMessage('Enter a valid phone number'),
  
  // Validate focalPerson
  check('focalPerson').notEmpty().withMessage('Focal person is required'),
  
  // Validate number (ensure it is numeric)
  check('number').isNumeric().withMessage('Number must be numeric'),
  
  // Validate PKR IBAN and Bank details
  check('pkrIban').matches(/^[A-Za-z0-9]+$/).withMessage('Enter a valid PKR IBAN'),
  check('pkrAccountTitle').notEmpty().withMessage('PKR Account Title is required'),
  check('pkrBankName').notEmpty().withMessage('PKR Bank Name is required'),
  check('pkrBranchName').notEmpty().withMessage('PKR Branch Name is required'),
  check('pkrSwiftCode').notEmpty().withMessage('PKR Swift Code is required'),

  // Validate FCY IBAN and Bank details
  check('fcyIban').matches(/^[A-Za-z0-9]+$/).withMessage('Enter a valid FCY IBAN'),
  check('fcyAccountTitle').notEmpty().withMessage('FCY Account Title is required'),
  check('fcyBankName').notEmpty().withMessage('FCY Bank Name is required'),
  check('fcyBranchName').notEmpty().withMessage('FCY Branch Name is required'),
  check('fcySwiftCode').notEmpty().withMessage('FCY Swift Code is required'),

  // Validate role_id
  check('role_id').isIn([1, 2]).withMessage('Role ID must be either 1 (Monazam) or 2 (HGO)'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    accountName, email, phone, focalPerson, number, newPassword, 
    pkrIban, pkrAccountTitle, pkrBankName, pkrBranchName, pkrSwiftCode, 
    fcyIban, fcyAccountTitle, fcyBankName, fcyBranchName, fcySwiftCode, 
    role_id, monazam_id // Add role_id and monazam_id from the frontend
  } = req.body;

  try {
  
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Save user details in the database
    const query = `
      INSERT INTO users (name, email, phone, focal_person, number, password, 
        pkr_iban, pkr_account_title, pkr_bank_name, pkr_branch_name, pkr_swift_code, 
        fcy_iban, fcy_account_title, fcy_bank_name, fcy_branch_name, fcy_swift_code, role_id, monazam_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    await db.query(query, [
      accountName, email, phone, focalPerson, number, hashedPassword,
      pkrIban, pkrAccountTitle, pkrBankName, pkrBranchName, pkrSwiftCode,
      fcyIban, fcyAccountTitle, fcyBankName, fcyBranchName, fcySwiftCode,
      role_id, monazam_id // Insert role and Monazam ID here
    ]);

    res.status(201).json({ message: 'Signup successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error during signup' });
  }
});
//-----------------------login----------------------------------------------------------------

app.post('/api/login', async (req, res) => {
  const { enrollment_no, password } = req.body;

  try {
    // Check if the user exists
    const [user] = await mysqlPool.query('SELECT * FROM users WHERE email = ?', [email]);

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Verify password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, role_id: user.role_id, monazam_id: user.monazam_id },
      'yourSecretKey',
      { expiresIn: '1h' }
    );

    // Send the token back to the frontend
    res.status(200).json({ token, role_id: user.role_id });
  } catch (error) {
    res.status(500).json({ message: 'Server error during login' });
  }
});


//-----------------------api for incoming_request----------------------------------------------

// POST API to save form data
app.post('/api/incomingrequest', async (req, res) => {
  const { date, narration, currency, amount } = req.body;

  if (narration.length > 250) {
    return res.status(400).json({ error: 'Narration exceeds 250 words' });
}
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

//-----------------------api for outgoing_request----------------------------------------------
app.post('/api/outgoingrequest', async (req, res) => {
  const { date, narration, currency, type, amount } = req.body;

  if (narration.length > 250) {
    return res.status(400).json({ error: 'Narration exceeds 250 words' });
}
if (!date || !narration || !currency || !type || !amount) {
  console.log('Validation failed: Missing required fields');
  return res.status(400).json({ error: 'All fields are required' });
}
const query = `INSERT INTO \`outgoing_request\` (date, narration, currency, type, amount) VALUES (?, ?, ?, ?, ?)`;
  
  try {
    const [results] = await mysqlPool.query(query, [date, narration, currency, type, amount]);
    res.status(200).json({ message: 'Data saved successfully!', results });
  } catch (error) {
    console.error('Error saving data:', error.message);
    res.status(500).json({ message: 'Error saving data', error: error.message });
  }
});
// GET API to fetch data from the database
app.get('/api/outgoingrequest', async (req, res) => {
  const limit = parseInt(req.query.limit) || 7; // Default to 7 records
  const offset = parseInt(req.query.offset) || 0; // Default to the first page

  const sql = 'SELECT * FROM `outgoing_request` LIMIT ? OFFSET ?';
  try {
    const [results] = await mysqlPool.query(sql, [limit, offset]);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
});
app.delete('/api/outgoingrequest/:id', async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid ID format.' });
  }

  const sql = 'DELETE FROM `outgoing_request` WHERE id = ?';

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
app.get('/api/outgoingrequest/count', async (req, res) => {
  const sql = 'SELECT COUNT(*) as count FROM `outgoing_request`';

  try {
    const [results] = await mysqlPool.query(sql);
    res.status(200).json(results[0].count);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching total records count', error });
  }
});

//-----------------------api for merchant_request----------------------------------------------
app.post('/api/merchantrequest', async (req, res) => {
  const { date, narration, currency, voucherid, amount } = req.body;

  if (narration.length > 250) {
    return res.status(400).json({ error: 'Narration exceeds 250 words' });
}
if (!date || !narration || !currency || !voucherid || !amount) {
  console.log('Validation failed: Missing required fields');
  return res.status(400).json({ error: 'All fields are required' });
}
const query = `INSERT INTO \`merchant_request\` (date, narration, currency, voucherid, amount) VALUES (?, ?, ?, ?, ?)`;
  
  try {
    const [results] = await mysqlPool.query(query, [date, narration, currency, voucherid, amount]);
    res.status(200).json({ message: 'Data saved successfully!', results });
  } catch (error) {
    console.error('Error saving data:', error.message);
    res.status(500).json({ message: 'Error saving data', error: error.message });
  }
});
// GET API to fetch data from the database
app.get('/api/merchantrequest', async (req, res) => {
  const limit = parseInt(req.query.limit) || 7; // Default to 7 records
  const offset = parseInt(req.query.offset) || 0; // Default to the first page

  const sql = 'SELECT * FROM `merchant_request` LIMIT ? OFFSET ?';
  try {
    const [results] = await mysqlPool.query(sql, [limit, offset]);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
});
app.delete('/api/merchantrequest/:id', async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid ID format.' });
  }

  const sql = 'DELETE FROM `merchant_request` WHERE id = ?';

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
app.get('/api/merchantrequest/count', async (req, res) => {
  const sql = 'SELECT COUNT(*) as count FROM `merchant_request`';

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
