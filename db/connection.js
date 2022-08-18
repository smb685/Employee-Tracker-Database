const mysql = require('mysql2');

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
database: 'employee_db',
password: 'March.031994',
});

console.log('You have now entered the Matrix database!')
 
module.exports = connection;