const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'myR00t!23',
  database: 'employees'
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
  });


module.exports = db;