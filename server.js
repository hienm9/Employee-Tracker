const { prompt } = require("inquirer");
const db = require("./db/connection");
require("console.table");

init();

// Start application at npm start
function init() {
    console.log("Employee Manager");
    runPrompts();
}

    // Prompt user to create a manager when starting the application (include name, id, email, officeNumber)
    function runPrompts() {
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
                    createDepartment();
                    break;
                case "ADD_ROLE":
                    createRole();
                    break;
                case "ADD_EMPLOYEE":
                    createEmployee();
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
        .then(() => runPrompts());
}

// Exit the application
function quit() {
    console.log("Goodbye!");
    process.exit();
  }
  