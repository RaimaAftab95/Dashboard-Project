const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const { check, validationResult } = require('express-validator');
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
require('dotenv').config();
app.use(bodyParser.json());

// jwtSecret
const crypto = require('crypto');
const secretKey = crypto.randomBytes(64).toString('hex');
console.log(secretKey);



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
//------------------------api to get role_id-----------------------------------------------
app.get('/roles', async (req, res) => {
  const query = 'SELECT * FROM roles';
  const [rows] = await mysqlPool.query(query);
  res.json(rows); // Sends the roles to the frontend
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
app.post('/api/signupmonazam', [
  // Validate email
  check('email').isEmail().withMessage('Enter a valid email address'),
  check('newPassword').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

  // Validate accountName
  check('accountName').notEmpty().withMessage('Account Name is required'),

  // Validate phone number with regex (accepts 10 to 15 digits with an optional leading "+")
  check('phone').matches(/^[+]?[0-9]{10,15}$/).withMessage('Enter a valid phone number'),

  // Validate focalPerson
  check('focalPerson').notEmpty().withMessage('Focal person is required'),

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
  
  // Validate E-Hajj IBAN
  check('e_hajj_iban').matches(/^[A-Z]{2}\d{2}[A-Za-z0-9]{1,30}$/).withMessage('Enter a valid E-Hajj IBAN'),

], async (req, res) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    accountName, email, phone, focalPerson, newPassword, 
    pkrIban, pkrAccountTitle, pkrBankName, pkrBranchName, pkrSwiftCode, 
    fcyIban, fcyAccountTitle, fcyBankName, fcyBranchName, fcySwiftCode,
    e_hajj_iban,
  } = req.body;

  try {
    // Check if the email already exists in the database
    const [existingUser] = await mysqlPool.query('SELECT * FROM monazam WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      return res.status(409).json({ message: 'Email is already in use' });
    }

    // Fetch enrollment number and company name based on accountName
    const [company] = await mysqlPool.query('SELECT company_name, enrollment_no FROM companies WHERE company_name = ?', [accountName]);
    if (company.length === 0) {
      return res.status(400).json({ message: 'Selected company not found' });
    }

    const enrollment = company[0].enrollment_no; // Store enrollment number

    // Check if the enrollment number already exists
    const [existingCompanyUser] = await mysqlPool.query('SELECT * FROM monazam WHERE enrollment = ?', [enrollment]);
    if (existingCompanyUser.length > 0) {
      return res.status(409).json({ message: 'User already exists for the selected company. Choose a different company name.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Log the SQL query and parameters before executing
    console.log('SQL Query: ', `
      INSERT INTO monazam (
        accountName, enrollment, email, phone, focalPerson, newPassword, 
        pkrIban, pkrAccountTitle, pkrBankName, pkrBranchName, pkrSwiftCode, 
        fcyIban, fcyAccountTitle, fcyBankName, fcyBranchName, fcySwiftCode, 
        e_hajj_iban, role_id
      ) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    console.log('Parameters: ', [
      accountName, enrollment, email, phone, focalPerson, hashedPassword,
      pkrIban, pkrAccountTitle, pkrBankName, pkrBranchName, pkrSwiftCode,
      fcyIban, fcyAccountTitle, fcyBankName, fcyBranchName, fcySwiftCode,
      e_hajj_iban, 
      1 // Role ID is set to 1 for all Monazam users
    ]);

    // Insert user into the database with role_id always set to 1
    await mysqlPool.query(`
      INSERT INTO monazam (
        accountName, enrollment, email, phone, focalPerson, newPassword, 
        pkrIban, pkrAccountTitle, pkrBankName, pkrBranchName, pkrSwiftCode, 
        fcyIban, fcyAccountTitle, fcyBankName, fcyBranchName, fcySwiftCode, 
        e_hajj_iban, role_id
      ) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      accountName, enrollment, email, phone, focalPerson, hashedPassword,
      pkrIban, pkrAccountTitle, pkrBankName, pkrBranchName, pkrSwiftCode,
      fcyIban, fcyAccountTitle, fcyBankName, fcyBranchName, fcySwiftCode,
      e_hajj_iban, 
      1 // Role ID is set to 1 for all Monazam users
    ]);
    
    res.status(201).json({ message: 'Signup successful!' });
  } catch (error) {
    console.error('Error during signup:', error.message);
    res.status(500).json({ message: 'Server error during signup', error: error.message });
  }
});
//-----------------------login as both monazam and ----------------------------------------------------------------

app.post('/api/login', async (req, res) => {
  const { enrollmentNumber, password, userType } = req.body;

  try {
    const role_id = userType === 'monazam' ? 1 : userType === 'hgo' ? 2 : null;

    if (!role_id) {
      return res.status(400).json({ message: 'Invalid user type' });
    }

    // Check if the user exists in the appropriate table
    const tableName = role_id === 1 ? 'monazam' : 'hgo'; 
    const [user] = await mysqlPool.query(`SELECT * FROM ${tableName} WHERE enrollment = ?`, [enrollmentNumber]);

    // Log the retrieved user data for debugging
    console.log('Retrieved user:', user);

    if (!user.length) {
      return res.status(400).json({ message: 'User not found' });
    }

    const retrievedUser = user[0];

    // Verify password
    const validPassword = await bcrypt.compare(password, retrievedUser.newPassword);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign(
      { id: retrievedUser.id, role_id: retrievedUser.role_id, enrollmentNumber },
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    res.status(200).json({ token, role_id: retrievedUser.role_id, enrollmentNumber });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error during login' });
  }
});
//--------------------------signup as hgo---------------------------------------------------------

function generateEnrollment() {
  let enrollment;
  do {
      enrollment = Math.floor(1000 + Math.random() * 9000); // 4 digits, not starting with 0
  } while (enrollment.toString().startsWith('0'));
  return enrollment.toString();
}
app.post('/signup-hgo', [
  // Validate email
  check('email').isEmail().withMessage('Enter a valid email address'),
  check('newPassword').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

  // Validate accountName
  check('accountName').notEmpty().withMessage('Account Name is required'),
  check('hgoname').notEmpty().withMessage('hgo name is required'),
  // Validate phone number with regex (accepts 10 to 15 digits with an optional leading "+")
  check('phone').matches(/^[+]?[0-9]{10,15}$/).withMessage('Enter a valid phone number'),

  // Validate focalPerson
  check('focalPerson').notEmpty().withMessage('Focal person is required'),

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
  
  // Validate E-Hajj IBAN
  check('e_hajj_iban').matches(/^[A-Z]{2}\d{2}[A-Za-z0-9]{1,30}$/).withMessage('Enter a valid E-Hajj IBAN'),

], async (req, res)=> {
  const {
      accountName, hgoname, email, phone, focalPerson, newPassword, 
      pkrIban, pkrAccountTitle, pkrBankName, pkrBranchName, pkrSwiftCode, 
      fcyIban, fcyAccountTitle, fcyBankName, fcyBranchName, fcySwiftCode, e_hajj_iban
  } = req.body;

  try {
      // Check if the company exists and fetch Monazam info
      const [monazam] = await mysqlPool.query('SELECT m.id, m.email, c.enrollment_no FROM monazam m JOIN companies c ON c.id = c.id WHERE c.company_name = ?', [accountName]);

      if (!monazam) {
          return res.status(400).json({ message: 'No Monazam registered with this company.' });
      }

      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Generate a 4-digit unique enrollment number for HGO
      const enrollment = generateEnrollment();

      // Save data in temporary_hgo_signup table
      const tempHGO = {
          hgoname,
          enrollment,
          email,
          phone,
          focalPerson,
          newPassword: hashedPassword,
          pkrIban,
          pkrAccountTitle,
          pkrBankName,
          pkrBranchName,
          pkrSwiftCode,
          fcyIban,
          fcyAccountTitle,
          fcyBankName,
          fcyBranchName,
          fcySwiftCode,
          e_hajj_iban,
          monazam_id: monazam.id,
          monazam_email: monazam.email,
          monazam_enrollment: monazam.enrollment_no,
          status: 'pending',
          role: 2
      };

      await mysqlPool.query('INSERT INTO temporary_hgo_signup SET ?', tempHGO);

      // Send email to Monazam for approval
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL, 
          pass: process.env.PASSWORD, 
        },
    });

      const mailOptions = {
        from:process.env.EMAIL,
          to: monazam.email,
          subject: 'New HGO Signup Request',
          text: `A new HGO user (${hgoname}) has signed up under your company (${accountName}). Please approve or reject the request.`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.error('Error sending email:', error);
              return res.status(500).json({ message: 'Error sending email to Monazam.' });
          }
          res.status(201).json({ message: 'Signup request sent to Monazam for approval.' });
      });

  } catch (err) {
      console.error('Error during signup:', err);
      res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/approve-hgo', async (req, res) => {
  const { hgoId, action } = req.body; // `hgoId` refers to the temporary_hgo_signup ID, and `action` is either 'approve' or 'reject'

  try {
      // Fetch HGO details from temporary_hgo_signup
      const [hgo] = await mysqlPool.query('SELECT * FROM temporary_hgo_signup WHERE id = ?', [hgoId]);

      if (!hgo) {
          return res.status(404).json({ message: 'HGO signup request not found.' });
      }

      if (action === 'approve') {
          // Move data to the hgo table
          await db.query('INSERT INTO hgo SET ?', {
              hgoname: hgo.hgoname,
              enrollment: hgo.enrollment,
              email: hgo.email,
              phone: hgo.phone,
              focalPerson: hgo.focalPerson,
              newPassword: hgo.newPassword,
              pkrIban: hgo.pkrIban,
              pkrAccountTitle: hgo.pkrAccountTitle,
              pkrBankName: hgo.pkrBankName,
              pkrBranchName: hgo.pkrBranchName,
              pkrSwiftCode: hgo.pkrSwiftCode,
              fcyIban: hgo.fcyIban,
              fcyAccountTitle: hgo.fcyAccountTitle,
              fcyBankName: hgo.fcyBankName,
              fcyBranchName: hgo.fcyBranchName,
              fcySwiftCode: hgo.fcySwiftCode,
              e_hajj_iban: hgo.e_hajj_iban,
              monazam_id: hgo.monazam_id,
              monazam_email: hgo.monazam_email,
              monazam_enrollment: hgo.monazam_enrollment,
              role: 2 // HGO role
          });

          // Delete from temporary_hgo_signup
          await mysqlPool.query('DELETE FROM temporary_hgo_signup WHERE id = ?', [hgoId]);

          res.json({ message: 'HGO approved and moved to main table.' });
      } else if (action === 'reject') {
          // Simply delete the entry from temporary_hgo_signup
          await mysqlPool.query('DELETE FROM temporary_hgo_signup WHERE id = ?', [hgoId]);

          // Send email to the HGO notifying rejection
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL, 
                pass: process.env.PASSWORD, 
            },
          });

          const mailOptions = {
            from: process.env.EMAIL,
              to: hgo.email,
              subject: 'HGO Signup Request Rejected',
              text: `Your signup request for HGO (${hgo.hgoname}) has been rejected.`,
          };

          transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                  console.error('Error sending rejection email:', error);
              }
          });

          res.json({ message: 'HGO signup request rejected and removed from temporary table.' });
      }

  } catch (err) {
      console.error('Error during approval/rejection:', err);
      res.status(500).json({ message: 'Internal server error' });
  }
});

//-----------------------api for incoming_request----------------------------------------------

// POST API to save form data
app.post('/api/incomingrequest', async (req, res) => {
  const { date, narration, currency, amount ,} = req.body;

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

  // Convert the date to 'YYYY-MM-DD' format
  const formattedDate = new Date(date).toISOString().slice(0, 10);

  const query = `INSERT INTO \`outgoing_request\` (date, narration, currency, type, amount) VALUES (?, ?, ?, ?, ?)`;

  try {
    const [results] = await mysqlPool.query(query, [formattedDate, narration, currency, type, amount]);
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
  const { date, narration, voucherid, amount } = req.body;

  // Check if narration exceeds 250 characters
  if (narration.length > 250) {
    return res.status(400).json({ error: 'Narration exceeds 250 words' });
  }

  // Check for required fields
  if (!date || !narration || !voucherid || !amount) {
    console.log('Validation failed: Missing required fields');
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Convert the date to 'YYYY-MM-DD' format
  const formattedDate = new Date(date).toISOString().slice(0, 10);

  // SQL query to insert data
  const query = `INSERT INTO \`merchant_request\` (date, narration, voucherid, amount) VALUES (?, ?, ?, ?)`;

  try {
    // Execute the query
    const [results] = await mysqlPool.query(query, [formattedDate, narration, voucherid, amount]);
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
