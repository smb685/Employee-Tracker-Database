const db = require('./db/connection');
const inquirer = require('inquirer');
const express = require('express');
const { connection } = require('./db');
const { start } = require('repl');
const router = express.Router();
const ct = require("console.table")


db.connect(err => {
    //if(err) throw err;
    console.log('Database connected.');
    
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

    views();
});

function views() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Please select an option.',
            choices: [
                'View Employees',
                'View Roles',
                'View Departments',
                'Add Role',
                'Add Department',
                'Quit'
            ],
        }
    ]
    )
    .then((answer) => {
        switch (answer.choice) {
            
            case 'View Employees':
                
                viewEmployees();
                break;
            case 'View Roles':

                viewRoles();
                break;
            case 'View Departments':

                viewDepartments();
                break;
            case 'Add New Employee':

                newEmployee();
                break;
             case 'Add Role':

                 addRole();

             case 'Add Department':

                 addDepartment();

            case 'Quit':

                Quit();
                break;
        }

    }

    )
}


function viewEmployees() {
    console.log("about to query for employees")
    db.promise().query("SELECT * FROM employee")
    .then(([rows,fields]) => {
        console.log("trying to get employees")
        console.log(ct.getTable(rows));
        inquirer.prompt({
            name:'test',
            type:'confirm',
            message:'Do you want to continue?',
            default: true

        })
    })
    .catch(err => { console.log(err);
    });
    console.log("after querying")
     db.query(request, function(err, res) {
       //if (err) throw err;
       console.log("Viewing All Employees");
       console.table(res);
       inquirer.prompt([
           {
               type: 'list',
               name: 'choice',
               message: 'select an option.',
               choices: [
                   'Main Menu',
                   'Quit'
              ],
           }
      ])
       .then((answer) => {
           switch (answer.choice) {
               case 'Main Menu':
                   start();
                 break;
                 case 'Quit':
                     Quit();
           }
       })
        start();
     }) 
   };

  function viewRoles() {
    let request = "SELECT * FROM role";
    db.query(request, function(err, res) {
        //if (err) throw err;
        console.log("Viewing All Roles");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'select an option.',
                choices: [
                    'Main Menu',
                    'Quit'
                ]
            }
        ])
        .then((answer)=>{
            switch (answer.choice) {
                case 'Main Menu':
                    start();
                    break;
                case 'Quit':
                Quit();
            }
        })
        
    })
}

function viewDepartments() {
    const request = "SELECT * FROM department";
    db.query(request, function(err, res) {
        //if (err) throw err;
        console.log("Viewing All Departments");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'select an option.',
                choices: [
                    'Main Menu',
                    'Quit'
                ]
            }
        ])
       .then((answer) => {
           switch (answer.choice){
               case 'Main Menu':
                   start();
                   break;
                   case 'Quit':
                       Quit();
           }
       })
    })
}

function newEmployee() {
    console.log('oy')
    inquirer.prompt ([
        {
        type: 'input',
        message: 'Enter employee first name.',
        name: 'FirstName'
        },
        {
            type: 'input',
            message: 'Enter employee last name.',
            name: 'LastName'
        },
        {
            type: 'input',
            message: 'Enter employee ID number',
            name: 'EmployeeID'
        },
        {
            type: 'input',
            message: 'Enter thier managers ID',
            name: 'ManagerID'
        }
        
    ])
    .then(function (response) {
        connection.query('INSERT INTO employees(first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?)', 
        [response.FirstName, response.LastName, response.EmployeeID, response.ManagerID]), function(err,response) {
            //if (err) throw err;
            console.table(res);
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'choice',
                    message: 'select an option.',
                    choices: [
                        'Main Menu',
                        'Quit'
                    ]
                }
            ])
           .then((answer) => {
               switch (answer.choice){
                   case 'Main Menu':
                       start();
                       break;
                       case 'Quit':
                           Quit();
               }
           })
        }
    })
}


function Quit() {
    console.log('Goodbye!');
    process.exit();
    
}
