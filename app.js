// app.js dependencies
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql');
const path = require('path');

const app = express();

// Database connection setup
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'syedhaider'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

app.use(express.static(path.join(__dirname, 'public')));

// Signup Route
app.post('/signup', (req, res) => {
  // Extract user information from the request body
  const { firstname, lastname, gender, username, email, password } = req.body;
  const newUser = { firstname, lastname, gender, username, email, password };
  
  // Insert new user into the database
  connection.query('INSERT INTO user SET ?', newUser, (err, result) => {
    if (err) {
      res.status(500).send('Error signing up');
      throw err;
    }
        // Send a "Signup successful" message with a link to login.html
  const message = 'Signup successful. Redirecting to login. if not click here <a href="/login.html">login page</a>...';
  res.status(200).send(message);
      }); // Redirect after 2 seconds (adjust the delay as needed)
});

// Login Route
app.post('/login', (req, res) => {
    // Extract email and password from the request body
    const { email, password } = req.body;
  
    // Check if the email and password match an entry in the database
    connection.query(
      'SELECT * FROM user WHERE email = ? AND password = ?',
      [email, password],
      (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
          // Successful login
          req.session.loggedin = true;
          req.session.email = email;
          res.redirect('/appointment.html');
        } else {
          // Failed login
          res.status(401).send('Invalid email or password');
        }
        res.end();
      }
    );
  });
  

// Other routes (login, appointment, etc.)

// Book Appointment Route
app.post('/book-appointment', (req, res) => {
     // Extract appointment details from the request body
    const { name, email, selectdoctor, appointmentDate, reason } = req.body;
  
    // Insert appointment details into the database (replace with your database logic)
    connection.query(
      'INSERT INTO appointments (patient_name, email, doctor, appointment_date, reason) VALUES (?, ?, ?, ?, ?)',
      [name, email, selectdoctor, appointmentDate, reason],
      (err, results) => {
        if (err) {
          // Handle appointment booking error
          res.status(500).send('Failed to book appointment');
          throw err;
        }
  
        // Appointment booked successfully
        res.status(200).send('Appointment booked successfully');
      }
    );
  });

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
