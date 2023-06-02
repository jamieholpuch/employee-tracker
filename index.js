const inquirer = require('inquirer');
const connection = require('./db/connection');
const db = require('./db/index');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: "Select an option below to begin",
            choices: [ "View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
            name: 'response'
        },
    ])
    .then((response) => {
        console.log(response)
        if(response.response === "View all departments") {
            viewAllDepartments()
        } else if (response.response === "View all employees") {
            viewAllEmployees()
        } else if (response.response === "View all roles") {
            viewAllRoles()
        } else if (response.response === "Add a department") {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Enter the department name',
                    name: 'department_name'
                },
            ])
            .then((response) => {
                console.log(response)
                db.addDepartments(response)
                promptUser()
            })
        } else if (response.response === "Add an employee") {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Enter the employee first name',
                    name: 'first_name'
                },
                {
                    type: 'input',
                    message: 'Enter the employee last name',
                    name: 'last_name'
                },
            ])
            .then((response) => {
                console.log(response)
                db.addEmployees(response)
                promptUser()
            });
        } else if (response.response === "Add a role") {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Enter the role title',
                    name: 'title'
                },
            ])
            .then((response) => {
                console.log(response)
                db.addRoles(response)
                promptUser()
            });
        } else {
            inquirer.prompt([
                {
                    type: 'list',
                    message: 'Which employee do you want to update',
                    choices: ["John Legend", "Bob Dylan", "Snoop Dogg", "Cardi B", "Kenny Chesney", "Luke Bryan", "Lil Wayne", "Shania Twain", "Kelsea Ballerini", "Kasey Musgraves"],
                    name: 'first_name'
                },
                {
                    type: 'list',
                    message: 'Which role do you want to assign them?',
                    choices: ["Customer Service Rep", 
                   "Inside Sales Manager", 
                   "Field Sales Manager", 
                    "Marketing Manager", 
                    "Communications Manager", 
                    "VP of Finance", 
                    "Controller", 
                    "Chief Technology Officer", 
                    "IT Specialist", 
                    "VP of Operations", 
                    "Regional Operations Manager"],
                    name: 'role'
                },
            ])
            .then((response) => {
                console.log(response)
                db.updateEmployeeRoles(response)
                promptUser()
            })
        }
    }
)};





function viewAllDepartments() {
    db.viewDepartments().then((results) => {
        console.table(results[0])
        promptUser()
    })
};

function viewAllEmployees() {
    db.viewEmployees().then((results) => {
        console.table(results[0])
        promptUser()
    })
};

function viewAllRoles() {
    db.viewRoles().then((results) => {
        console.table(results[0])
        promptUser()
    })
};

// function updateDepartments() {
//      db.addDepartments().then(() => {
//          console.table(results[0])
//         promptUser()
//      })
//  };

// viewAllDepartments();
//         console.log(response)
//         SELECT IF(response.name === "View all departments", "YES", "NO")
//     })

//        // if (response.name === "View all departments") {
//         //show formatted table of department names and department ids
//        // describe department
//         // } else if (response === "View all roles") {
//         //     //show table with job title, role id, department of the role and salary
//         // } else if (response === "View all employees") {
//         //     //show table of employee id, first name, last name, job title, departments, salaries, and managers
//         // } else if (response === "Add a department") {
//         //     //prompt to enter name of department
//         //     //add department to database
//         //     INSERT INTO department (name)
//         //         VALUES (response.name);
//         // } else if (response === "Add a role") {
//         //     //prompt to enter role name, salary, and department
//         //     //add role to database
//         //     INSERT INTO role (title, salary)
//         //     VALUES (response.title, response.salary);

//         // } else if (response === "Add an employee") {
//         //     //prompt to enter first name, last name, role, and manager
//         //     //add to database
//         //     INSERT INTO employee (first_name, last_name)
//         //     VALUES (response.first_name, response.last_name);
//         // } else {
//         //     //show table of employees
//         //     //prompt to select employee to update
//         //     //prompt to enter first name, last name, role, and manager
//         //     //add to database
//         };

promptUser()