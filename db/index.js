const connection = require('./connection')

class DB {

    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees() {
        return this.connection.query(
            'SELECT * FROM employee.employees');
    }
}




module.exports = new DB(connection);

// 👇️ default import
import fetch from 'node-fetch'

// 👇️ named import
import {myPackage} from 'my-package'
