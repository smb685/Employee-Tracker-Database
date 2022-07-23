const mysql = require('mysql2');

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
database: 'employee_db',
password: 'password',
});

console.log('You have now entered the Matrix database!')
 
module.exports = connection;