const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mysql = require("mysql2/promise");

// const mysqlPool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
// });

// // Check MySQL connection when the app starts
// (async () => {
//     try {
//         const connection = await mysqlPool.getConnection();
//         console.log("Connected to MySQL successfully");
//         connection.release();
//     } catch (err) {
//         console.error("Error connecting to MySQL:", err.message);
//     }
// })();

// Local Strategy for authenticating users
passport.use(new LocalStrategy({
    usernameField: 'email', // Assuming email is used for login
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        // Fetch user from MySQL
        const connection = await mysqlPool.getConnection();
        const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
        connection.release();

        if (rows.length === 0) {
            return done(null, false, { message: 'Incorrect email.' });
        }

        const user = rows[0];

        // Validate password (You would need a function to compare password hashes)
        const isValid = await user.validatePassword(password); // Ensure you have a validatePassword function
        if (!isValid) {
            return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

// Serialize user ID to store in the session
passport.serializeUser((user, done) => {
    done(null, user.id); // Store user ID in the session
});

// Deserialize user by their ID
passport.deserializeUser(async (id, done) => {
    try {
        const connection = await mysqlPool.getConnection();
        const [rows] = await connection.execute('SELECT * FROM users WHERE id = ?', [id]);
        connection.release();

        if (rows.length > 0) {
            done(null, rows[0]); // Attach user object to request
        } else {
            done(null, false); // User not found
        }
    } catch (err) {
        done(err);
    }
});

module.exports = passport;
