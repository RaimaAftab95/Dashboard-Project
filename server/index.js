const express = require("express");
// const mysqlPool = require('./config/database');
const cors = require("cors");
const morgan = require("morgan");
const bcrypt = require("bcrypt");
const session = require("express-session");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");
const authenticateToken= require('./Middleware/Authentication/authenticateToken')
const { check, validationResult } = require("express-validator");
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
require("dotenv").config();
app.use(bodyParser.json());

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
// jwtSecret
const crypto = require("crypto");
const secretKey = crypto.randomBytes(64).toString("hex");
console.log(secretKey);

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

//-----------------------api for company name--------------------------------------------------

app.post("/api/company", async (req, res) => {
  const { company_name, enrollment_no } = req.body;

  const query = `INSERT INTO companies (company_name, enrollment_no) VALUES (?, ?)`;
  try {
    const [results] = await mysqlPool.query(query, [
      company_name,
      enrollment_no,
    ]);
    res.status(200).json({ message: "Data saved successfully!", results });
  } catch (error) {
    console.error("Error saving data:", error.message);
    res
      .status(500)
      .json({ message: "Error saving data", error: error.message });
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    res.status(200).json({ message: "Logged out successfully" });
  });
});
// Route to fetch all companies
app.get("/api/companies", async (req, res) => {
  const query = "SELECT * FROM companies";

  try {
    const [results] = await mysqlPool.query(query);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});
app.delete("/api/companies/:id", async (req, res) => {
  const { id } = req.params;

  // Ensure id is numeric before proceeding
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID format." });
  }

  const sql = "DELETE FROM companies WHERE id = ?";

  try {
    const [results] = await mysqlPool.query(sql, [id]);

    if (results.affectedRows > 0) {
      res.status(200).json({ message: "Record deleted successfully!" });
    } else {
      res.status(404).json({ message: "Record not found." });
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    res
      .status(500)
      .json({ message: "Error deleting data", error: error.message });
  }
});
//------------------------api to get role_id-----------------------------------------------
app.get("/roles", async (req, res) => {
  const query = "SELECT * FROM roles";
  const [rows] = await mysqlPool.query(query);
  res.json(rows); // Sends the roles to the frontend
});

//-----------------------api hgo company-------------------------------------------------------
app.post("/api/company_hgo", async (req, res) => {
  const { company_name, enrollment_no } = req.body;

  const query = `INSERT INTO companies_hgo (company_name, enrollment_no) VALUES (?, ?)`;
  try {
    const [results] = await mysqlPool.query(query, [
      company_name,
      enrollment_no,
    ]);
    res.status(200).json({ message: "Data saved successfully!", results });
  } catch (error) {
    console.error("Error saving data:", error.message);
    res
      .status(500)
      .json({ message: "Error saving data", error: error.message });
  }
});
//-----------------------api for signUp---------------------------------------------------------
app.post( "/api/signupmonazam",
  [
    // Validate email
    check("email")
      .isEmail()
      .withMessage("Enter a valid email address")
      .notEmpty()
      .withMessage("Email is required"),

    // Validate password
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long")
      .notEmpty()
      .withMessage("Password is required"),

    // Validate accountName
    check("accountName").notEmpty().withMessage("Account Name is required"),

    // Validate name
    check("name").notEmpty().withMessage("Name is required"),

    // Validate phone number with regex
    check("phone")
      .matches(/^[+]?[0-9]{10,15}$/)
      .withMessage("Enter a valid phone number")
      .notEmpty()
      .withMessage("Phone number is required"),

    // Validate focalPerson
    check("focalPerson").notEmpty().withMessage("Focal person is required"),

    // Validate PKR IBAN and Bank details
    check("pkrIban")
      .matches(/^[A-Za-z0-9]+$/)
      .withMessage("Enter a valid PKR IBAN")
      .notEmpty()
      .withMessage("PKR IBAN is required"),

    check("pkrAccountTitle")
      .notEmpty()
      .withMessage("PKR Account Title is required"),

    check("pkrBankName").notEmpty().withMessage("PKR Bank Name is required"),

    check("pkrBranchName")
      .notEmpty()
      .withMessage("PKR Branch Name is required"),

    check("pkrSwiftCode").notEmpty().withMessage("PKR Swift Code is required"),

    // Validate FCY IBAN and Bank details
    check("fcyIban")
      .matches(/^[A-Za-z0-9]+$/)
      .withMessage("Enter a valid FCY IBAN")
      .notEmpty()
      .withMessage("FCY IBAN is required"),

    check("fcyAccountTitle")
      .notEmpty()
      .withMessage("FCY Account Title is required"),

    check("fcyBankName").notEmpty().withMessage("FCY Bank Name is required"),

    check("fcyBranchName")
      .notEmpty()
      .withMessage("FCY Branch Name is required"),

    check("fcySwiftCode").notEmpty().withMessage("FCY Swift Code is required"),

    // Validate E-Hajj IBAN
    check("e_hajj_iban")
      .matches(/^[A-Z]{2}\d{2}[A-Za-z0-9]{1,30}$/)
      .withMessage("Enter a valid E-Hajj IBAN")
      .notEmpty()
      .withMessage("E-Hajj IBAN is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      accountName,
      name,
      email,
      phone,
      focalPerson,
      password,
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
    } = req.body;

    try {
      // Check if the email already exists in the database
      const [existingUser] = await mysqlPool.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );
      if (existingUser.length > 0) {
        return res.status(409).json({ message: "Email is already in use" });
      }

      // Fetch enrollment number and company name based on accountName
      const [company] = await mysqlPool.query(
        "SELECT company_name, enrollment_no FROM companies WHERE company_name = ?",
        [accountName]
      );
      if (company.length === 0) {
        return res.status(400).json({ message: "Selected company not found" });
      }

      const enrollment = company[0].enrollment_no; // Store enrollment number

      // Check if the enrollment number already exists
      const [existingCompanyUser] = await mysqlPool.query(
        "SELECT * FROM users WHERE enrollment = ?",
        [enrollment]
      );
      if (existingCompanyUser.length > 0) {
        return res.status(409).json({
          message:
            "User already exists for the selected company. Choose a different company name.",
        });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      //   // Log the SQL query and parameters before executing
      //   console.log(
      //     "SQL Query: ",
      //     `
      //   INSERT INTO user(
      //     accountName,name, enrollment, email, phone, focalPerson, password,
      //     pkrIban, pkrAccountTitle, pkrBankName, pkrBranchName, pkrSwiftCode,
      //     fcyIban, fcyAccountTitle, fcyBankName, fcyBranchName, fcySwiftCode,
      //     e_hajj_iban, user_type
      //   )
      //   VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      // `
      //   );
      //   console.log("Parameters: ", [
      //     accountName,
      //     name,
      //     enrollment,
      //     email,
      //     phone,
      //     focalPerson,
      //     hashedPassword,
      //     pkrIban,
      //     pkrAccountTitle,
      //     pkrBankName,
      //     pkrBranchName,
      //     pkrSwiftCode,
      //     fcyIban,
      //     fcyAccountTitle,
      //     fcyBankName,
      //     fcyBranchName,
      //     fcySwiftCode,
      //     e_hajj_iban,
      //     'Monazam', // Role ID is set to 1 for all Monazam users
      //   ]);
      await mysqlPool.query(
        `
      INSERT INTO users (
        accountName, name, enrollment, email, phone, focalPerson, password, 
        pkrIban, pkrAccountTitle, pkrBankName, pkrBranchName, pkrSwiftCode, 
        fcyIban, fcyAccountTitle, fcyBankName, fcyBranchName, fcySwiftCode, 
        e_hajj_iban, user_type
      ) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
        [
          accountName,
          name,
          enrollment,
          email,
          phone,
          focalPerson,
          hashedPassword,
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
          "Monazam",
        ]
      );

      res.status(201).json({ message: "Signup successful!" });
    } catch (error) {
      console.error("Error during signup:", error.message);
      res
        .status(500)
        .json({ message: "Server error during signup", error: error.message });
    }
  }
);
//-----------------------login as both monazam and ----------------------------------------------------------------

app.post("/api/login", async (req, res) => {
  const { enrollment, password } = req.body;

  try {
    const [rows] = await mysqlPool.query(
      `SELECT * FROM users WHERE enrollment = ?`,
      [enrollment]
    );
    const user = rows[0];

    if (!user) {
      return res.status(400).json({ success: false, message: "Wrong enrollment number" });
    }

    if (!user.password) {
      return res.status(500).json({ success: false, message: "User has no password set" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    console.log("Password match:", isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Wrong password" });
    }
    // If login is successful, respond with user details and user type
    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      enrollment: user.enrollment,
      user_Type: user.user_type,

    };
    console.log("session", req.session)
    res.status(200).json({
      success: true, // Include success flag
      id: user.id,
      name: user.name,
      email: user.email,
      enrollment: user.enrollment,
      user_type: user.user_type, // Ensure to send user_type as per the frontend requirement
    });
   
    // Respond with success message
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error" });
  }
});
//--------------------------signup as hgo---------------------------------------------------------

function generateEnrollment() {
  let enrollment;
  do {
    enrollment = Math.floor(1000 + Math.random() * 9000); // 4 digits, not starting with 0
  } while (enrollment.toString().startsWith("0"));
  return enrollment.toString();
}
app.post( "/signup-hgo",
  [
    check("email")
      .isEmail()
      .withMessage("Enter a valid email address")
      .notEmpty()
      .withMessage("Email is required"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long")
      .notEmpty()
      .withMessage("Password is required"),
    check("accountName").notEmpty().withMessage("Account Name is required"),
    check("name").notEmpty().withMessage("Name is required"),
    check("phone")
      .matches(/^[+]?[0-9]{10,15}$/)
      .withMessage("Enter a valid phone number")
      .notEmpty()
      .withMessage("Phone number is required"),
    check("focalPerson").notEmpty().withMessage("Focal person is required"),
    check("pkrIban")
      .matches(/^[A-Za-z0-9]+$/)
      .withMessage("Enter a valid PKR IBAN")
      .notEmpty()
      .withMessage("PKR IBAN is required"),
    check("pkrAccountTitle")
      .notEmpty()
      .withMessage("PKR Account Title is required"),
    check("pkrBankName").notEmpty().withMessage("PKR Bank Name is required"),
    check("pkrBranchName")
      .notEmpty()
      .withMessage("PKR Branch Name is required"),
    check("pkrSwiftCode").notEmpty().withMessage("PKR Swift Code is required"),
    check("fcyIban")
      .matches(/^[A-Za-z0-9]+$/)
      .withMessage("Enter a valid FCY IBAN")
      .notEmpty()
      .withMessage("FCY IBAN is required"),
    check("fcyAccountTitle")
      .notEmpty()
      .withMessage("FCY Account Title is required"),
    check("fcyBankName").notEmpty().withMessage("FCY Bank Name is required"),
    check("fcyBranchName")
      .notEmpty()
      .withMessage("FCY Branch Name is required"),
    check("fcySwiftCode").notEmpty().withMessage("FCY Swift Code is required"),
    check("e_hajj_iban")
      .matches(/^[A-Z]{2}\d{2}[A-Za-z0-9]{1,30}$/)
      .withMessage("Enter a valid E-Hajj IBAN")
      .notEmpty()
      .withMessage("E-Hajj IBAN is required"),
  ],
  async (req, res) => {
    const {
      accountName,
      name,
      email,
      phone,
      focalPerson,
      password,
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
    } = req.body;

    try {
      // Check if the company (Monazam) exists
      const [monazam] = await mysqlPool.query(
        "SELECT id, email FROM users WHERE accountName = ? AND user_type = 'Monazam'",
        [accountName]
      );

      if (!monazam || monazam.length === 0) {
        return res.status(400).json({ message: "No Monazam registered with this company." });
      }

      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);

      // Generate a unique enrollment number for HGO
      const enrollment = generateEnrollment();

      // Save data in temporary_hgo_signup table
      const tempHGO = {
        name,
        accountName,
        enrollment,
        email,
        phone,
        focalPerson,
        password: hashedPassword,
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
        monazam_id: monazam[0].id, // Set the Monazam ID as parent
        status: "pending",
        user_type: "HGO",
      };

      await mysqlPool.query("INSERT INTO temporary_hgo_signup SET ?", tempHGO);

      // Send email to Monazam for approval
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL,
        to: monazam[0].email, // Get the email from the Monazam record
        subject: "New HGO Signup Request",
        text: `A new HGO user (${name}) has signed up under your company (${accountName}).
         Please approve or reject the request by clicking the following links:
         - Approve: ${process.env.APP_URL}/approve-hgo?enrollment=${enrollment}
         - Reject: ${process.env.APP_URL}/reject-hgo?enrollment=${enrollment}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          return res.status(500).json({ message: "Error sending email to Monazam." });
        }
        res.status(201).json({ message: "Signup request sent to Monazam for approval." });
      });
    } catch (err) {
      console.error("Error during signup:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);


app.post("/approve-hgo", async (req, res) => {
  const { id, action } = req.body; // `hgoId` refers to the temporary_hgo_signup ID, and `action` is either 'approve' or 'reject'

  try {
    // Fetch HGO details from temporary_hgo_signup
    const [hgo] = await mysqlPool.query(
      "SELECT * FROM temporary_hgo_signup WHERE id = ?",
      [id]
      
    );

    if (!hgo) {
      return res.status(404).json({ message: "HGO signup request not found." });
    }

    if (action === "approve") {
      // Move data to the hgo table   
 
      await mysqlPool.query("INSERT INTO users SET ?", {

        name: hgo[0].name,
        accountName: hgo[0].accountName,
        enrollment: hgo[0].enrollment,
        email: hgo[0].email,
        phone: hgo[0].phone,
        focalPerson: hgo[0].focalPerson,
        password: hgo[0].password,
        pkrIban: hgo[0].pkrIban,
        pkrAccountTitle: hgo[0].pkrAccountTitle,
        pkrBankName: hgo[0].pkrBankName,
        pkrBranchName: hgo[0].pkrBranchName,
        pkrSwiftCode: hgo[0].pkrSwiftCode,
        fcyIban: hgo[0].fcyIban,
        fcyAccountTitle: hgo[0].fcyAccountTitle,
        fcyBankName: hgo[0].fcyBankName,
        fcyBranchName: hgo[0].fcyBranchName,
        fcySwiftCode: hgo[0].fcySwiftCode,
        e_hajj_iban: hgo[0].e_hajj_iban,
        user_type: "HGO",
        monazam_id: hgo[0].monazam_id, // Link to the Monazam (parent)
      });

      // Delete from temporary_hgo_signup
      await mysqlPool.query("DELETE FROM temporary_hgo_signup WHERE id = ?", [
        id,
      ]);

      res.json({ message: "HGO approved and moved to main users table." });
    } else if (action === "reject") {
      // Simply delete the entry from temporary_hgo_signup
      await mysqlPool.query("DELETE FROM temporary_hgo_signup WHERE id = ?", [
        id,
      ]);

      // Send email to the HGO notifying rejection
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL,
        to: user.email,
        subject: "HGO Signup Request Rejected",
        text: `Your signup request for HGO (${user.name}) has been rejected.`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending rejection email:", error);
        }
      });

      res.json({
        message:
          "HGO signup request rejected and removed from temporary table.",
      });
    }
  } catch (err) {
    console.error("Error during approval/rejection:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

//-----------------------api for incoming_request----------------------------------------------
const router = express.Router();

const authenticateUser = (req, res, next) => {
  const loggedInUser = req.session.user;
  console.log("session",req.session)
  console.log("Logged in user:", loggedInUser); // Debugging line
  if (!loggedInUser || loggedInUser.user_type !== 'HGO') {
    return res.status(401).json({ message: 'Unauthorized or invalid user type' });
  }
  req.user = loggedInUser;
  
  next();
};
app.post("/api/incomingrequest", async (req, res) => {
  const { date, narration, currency, amount } = req.body;

  if (narration.length > 250) {
    return res.status(400).json({ error: "Narration exceeds 250 words" });
  }
  if (!date || !narration || !currency || !amount) {
    console.log("Validation failed: Missing required fields");
    return res.status(400).json({ error: "All fields are required" });
  }
  const formattedDate = new Date(date).toISOString().slice(0, 10);

  const sql =
    "INSERT INTO incoming (date, narration, currency, amount) VALUES (?, ?, ?, ?)";

  try {
    const [results] = await mysqlPool.query(sql, [
      date,
      narration,
      currency,
      amount,
    ]);
    res.status(200).json({ message: "Data saved successfully!", results });
  } catch (error) {
    console.error("Error saving data:", error.message);
    res
      .status(500)
      .json({ message: "Error saving data", error: error.message });
  }
});
// POST API to save form data
// app.post('/api/incomingrequest', async (req, res) => {
//    console.log("Incoming request body:", req.body); 
//   const { date, narration, currency, amount } = req.body;
//   const hgoUser = req.user;

//   if (!date || !narration || !currency || !amount) {
//     return res.status(400).json({ message: 'All fields are required.' });
//   }
//   try {  
//     const [result] = await mysqlPool.query(
//       'SELECT monazam_id FROM users WHERE id = ? AND user_type = "HGO"',
//       [hgoUser.id]
//     );
//     console.log("Monazam ID query result:", result); ;

//     const monazam_id = result[0]?.monazam_id;

//     if (!monazam_id) {
//       return res.status(400).json({ message: 'HGO does not have a valid Monazam parent.' });
//     }
//     const status = 'pending'; 
//     await mysqlPool.query(
//       'INSERT INTO incoming_requests (date, narration, amount, currency, hgo_id, monazam_id, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
//       [date, narration, amount, currency, hgoUser.id, monazam_id, status]
//     );
//     res.status(200).json({ message: 'Incoming request submitted successfully.' });
//   } catch (error) {
//     console.error('Error saving request:', error);
//     res.status(500).json({ message: 'Failed to save request.' });
//   }
// });
app.post("/api/reviewrequest/:requestId", async (req, res) => {
  const { requestId } = req.params;
  const { action } = req.body; // 'approve' or 'reject'
  const monazamId = req.user.id; // Assuming Monazam user ID is stored in req.user after login

  if (req.user.user_type !== 'Monazam') {
    return res.status(403).json({ message: "Only Monazam users can review requests." });
  }

  if (action !== 'approve' && action !== 'reject') {
    return res.status(400).json({ message: "Invalid action." });
  }

  // Check if the request belongs to one of Monazam's HGOs
  const checkQuery = `
    SELECT id FROM incoming_request
    WHERE id = ? AND monazam_id = ?
  `;
  const [[request]] = await mysqlPool.query(checkQuery, [requestId, monazamId]);

  if (!request) {
    return res.status(403).json({ message: "You do not have permission to review this request." });
  }

  // Update the request status
  const updateQuery = `
    UPDATE incoming_request
    SET status = ?
    WHERE id = ?
  `;
  const newStatus = action === 'approve' ? 'approved' : 'rejected';
  await mysqlPool.query(updateQuery, [newStatus, requestId]);

  res.status(200).json({ message: `Request ${newStatus} successfully!` });
});
app.get("/api/incomingrequest", async (req, res) => {
  const limit = parseInt(req.query.limit) || 7; // Default to 7 records
  const offset = parseInt(req.query.offset) || 0; // Default to the first page

  const sql = "SELECT * FROM `incoming` LIMIT ? OFFSET ?";
  try {
    const [results] = await mysqlPool.query(sql, [limit, offset]);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});

// GET API to fetch data from the database
app.get("/api/incomingrequest", async (req, res) => {
  const limit = parseInt(req.query.limit) || 7; // Default to 7 records
  const offset = parseInt(req.query.offset) || 0; // Default to the first page

  const sql = "SELECT * FROM incoming_request LIMIT ? OFFSET ?";
  try {
    const [results] = await mysqlPool.query(sql, [limit, offset]);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});

// DELETE API to delete a record by ID
app.delete("/api/incomingrequest/:id", async (req, res) => {
  const { id } = req.params;

  // Ensure id is numeric before proceeding
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID format." });
  }

  const sql = "DELETE FROM incoming_request WHERE id = ?";

  try {
    const [results] = await mysqlPool.query(sql, [id]);

    if (results.affectedRows > 0) {
      res.status(200).json({ message: "Record deleted successfully!" });
    } else {
      res.status(404).json({ message: "Record not found." });
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    res
      .status(500)
      .json({ message: "Error deleting data", error: error.message });
  }
});
// GET API to fetch total record count
app.get("/api/incomingrequest/count", async (req, res) => {
  const sql = "SELECT COUNT(*) as count FROM incoming_request";

  try {
    const [results] = await mysqlPool.query(sql);
    res.status(200).json(results[0].count);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching total records count", error });
  }
});

//-----------------------api for outgoing_request----------------------------------------------
app.post("/api/outgoingrequest", async (req, res) => {
  const { date, narration, currency, type, amount } = req.body;

  if (narration.length > 250) {
    return res.status(400).json({ error: "Narration exceeds 250 words" });
  }

  if (!date || !narration || !currency || !type || !amount) {
    console.log("Validation failed: Missing required fields");
    return res.status(400).json({ error: "All fields are required" });
  }

  // Convert the date to 'YYYY-MM-DD' format
  const formattedDate = new Date(date).toISOString().slice(0, 10);

  const query = `INSERT INTO \`outgoing_request\` (date, narration, currency, type, amount) VALUES (?, ?, ?, ?, ?)`;

  try {
    const [results] = await mysqlPool.query(query, [
      formattedDate,
      narration,
      currency,
      type,
      amount,
    ]);
    res.status(200).json({ message: "Data saved successfully!", results });
  } catch (error) {
    console.error("Error saving data:", error.message);
    res
      .status(500)
      .json({ message: "Error saving data", error: error.message });
  }
});

// GET API to fetch data from the database
app.get("/api/outgoingrequest", async (req, res) => {
  const limit = parseInt(req.query.limit) || 7; // Default to 7 records
  const offset = parseInt(req.query.offset) || 0; // Default to the first page

  const sql = "SELECT * FROM `outgoing_request` LIMIT ? OFFSET ?";
  try {
    const [results] = await mysqlPool.query(sql, [limit, offset]);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});
app.delete("/api/outgoingrequest/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID format." });
  }

  const sql = "DELETE FROM `outgoing_request` WHERE id = ?";

  try {
    const [results] = await mysqlPool.query(sql, [id]);

    if (results.affectedRows > 0) {
      res.status(200).json({ message: "Record deleted successfully!" });
    } else {
      res.status(404).json({ message: "Record not found." });
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    res
      .status(500)
      .json({ message: "Error deleting data", error: error.message });
  }
});
// GET API to fetch total record count
app.get("/api/outgoingrequest/count", async (req, res) => {
  const sql = "SELECT COUNT(*) as count FROM `outgoing_request`";

  try {
    const [results] = await mysqlPool.query(sql);
    res.status(200).json(results[0].count);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching total records count", error });
  }
});

//-----------------------api for merchant_request----------------------------------------------
app.post("/api/merchantrequest", async (req, res) => {
  const { date, narration, voucherid, amount } = req.body;

  // Check if narration exceeds 250 characters
  if (narration.length > 250) {
    return res.status(400).json({ error: "Narration exceeds 250 words" });
  }

  // Check for required fields
  if (!date || !narration || !voucherid || !amount) {
    console.log("Validation failed: Missing required fields");
    return res.status(400).json({ error: "All fields are required" });
  }

  // Convert the date to 'YYYY-MM-DD' format
  const formattedDate = new Date(date).toISOString().slice(0, 10);

  // SQL query to insert data
  const query = `INSERT INTO \`merchant_request\` (date, narration, voucherid, amount) VALUES (?, ?, ?, ?)`;

  try {
    // Execute the query
    const [results] = await mysqlPool.query(query, [
      formattedDate,
      narration,
      voucherid,
      amount,
    ]);
    res.status(200).json({ message: "Data saved successfully!", results });
  } catch (error) {
    console.error("Error saving data:", error.message);
    res
      .status(500)
      .json({ message: "Error saving data", error: error.message });
  }
});

// GET API to fetch data from the database
app.get("/api/merchantrequest", async (req, res) => {
  const limit = parseInt(req.query.limit) || 7; // Default to 7 records
  const offset = parseInt(req.query.offset) || 0; // Default to the first page

  const sql = "SELECT * FROM `merchant_request` LIMIT ? OFFSET ?";
  try {
    const [results] = await mysqlPool.query(sql, [limit, offset]);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});
app.delete("/api/merchantrequest/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID format." });
  }

  const sql = "DELETE FROM `merchant_request` WHERE id = ?";

  try {
    const [results] = await mysqlPool.query(sql, [id]);

    if (results.affectedRows > 0) {
      res.status(200).json({ message: "Record deleted successfully!" });
    } else {
      res.status(404).json({ message: "Record not found." });
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    res
      .status(500)
      .json({ message: "Error deleting data", error: error.message });
  }
});
// GET API to fetch total record count
app.get("/api/merchantrequest/count", async (req, res) => {
  const sql = "SELECT COUNT(*) as count FROM `merchant_request`";

  try {
    const [results] = await mysqlPool.query(sql);
    res.status(200).json(results[0].count);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching total records count", error });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
