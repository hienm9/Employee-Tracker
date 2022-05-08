const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");

init();

// Start application at npm start
function init() {
    console.log("Employee Manager");
    showPrompts();
}

    // Prompt user to create a manager when starting the application (include name, id, email, officeNumber)
    function showPrompts() {
        prompt([
            {
                type: "list",
                name: "choice",
                message: "What would you like to do? ",
                choices: [
                    {
                        name: "View All Departments",
                        value: "VIEW_DEPARTMENTS"
                    },
                    {
                        name: "View All Roles",
                        value: "VIEW_ROLES"
                    },
                    {
                        name: "View All Employees",
                        value: "VIEW_EMPLOYEES"
                    },
    
                    {
                        name: "Add a Department",
                        value: "ADD_DEPARTMENT"
                    },
                    {
                        name: "Add a Role",
                        value: "ADD_ROLE"
                    },
                    {
                        name: "Add an Employee",
                        value: "ADD_EMPLOYEE"
                    },
                    {
                        name: "Update Employee Role",
                        value: "UPDATE_EMPLOYEE_ROLE"
                    },
                    {
                        name: "Quit",
                        value: "QUIT"
                    }
                ]
            },
            
        ]).then(userChoice => {
            let selection = userChoice.choice;
            // Call function from what the user selects
            switch (selection) {
                case "VIEW_DEPARTMENTS":
                    viewAllDepartments();
                    break;
                case "VIEW_ROLES":
                    viewAllRoles();
                    break;
                case "VIEW_EMPLOYEES":
                    viewAllEmployees();
                    break;
                case "ADD_DEPARTMENT":
                    addDepartment();
                    break;
                case "ADD_ROLE":
                    addRole();
                    break;
                case "ADD_EMPLOYEE":
                    addEmployee();
                    break;
                case "UPDATE_EMPLOYEE_ROLE":
                    updateEmployeeRole();
                    break;
                default:
                    quit();
            }
        });
    }


// View all deparments
function viewAllDepartments() {
    db.allDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log("\n");
            console.table(departments);
        })
        .then(() => showPrompts());
}


// View all roles
function viewAllRoles() {
    db.allRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("\n");
            console.table(roles);
        })
        .then(() => showPrompts());
}

// View all employees
function viewAllEmployees() {
    db.allEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n");
            console.table(employees);
        })
        .then(() => showPrompts());
}

// When add department, prompted to enter the name of the department and that department is added to the database
function addDepartment() {
    prompt([
        {
          name: "name",
          message: "What is the name of the department?"
        }
      ])
      .then(userChoice => {
        let name = userChoice;
        db.createDepartment(name)
          .then(() => console.log(`${name.name} is added to the database`))
          .then(() => showPrompts())
      })
}


// Exit the application
function quit() {
    console.log("Goodbye!");
    process.exit();
  }
  
