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
          message: "What is the name of the new department?"
        }
      ])
      .then(userChoice => {
        let name = userChoice;
        db.createDepartment(name)
          .then(() => console.log(`${name.name} is added to the database`))
          .then(() => showPrompts())
      })
}

// function add role
// it prompts user to enter the name, salary, and department for the role 
// and that role is added to the database
function addRole() {
    db.allDepartments()
        .then(([rows]) => {
            let departments = rows;
            const departmentSelect = departments.map(({ id, name }) => ({
                name: name,
                value: id
            }));
        prompt([
            {
                type: "input",
                name: "title",
                message: "Please enter the title or the role",
                validate: answer => {
                if (answer !== "") {
                return true;
                }
                return "Please enter at least one character for the role.";
                }
            },
            {
                name: "salary",
                type: "number",
                message: "What is the salary?"
            },
            {
                name: "department",
                type: "list",
                message: "Which department does this role belong to?",
                choices:departmentSelect
            }
        ])
        .then(role => {
            db.createRole(role)
            .then(() => console.log(`Role ${role.title} is added to the database`))
            .then(() => showPrompts())
        })
    })
}

// add an employee
//prompted to enter the employee’s first name, last name, role, and manager, 
//and that employee is added to the database
function addEmployee() {
    prompt([
      {
        name: "first_name",
        type: "input",
        message: "Please enter the new employee's first name"
      },
      {
        name: "last_name",
        type: "input",
        message: "Please enter the new employee's last name"
      },
      {
        type: "list",
        name: "roleId",
        message: "Please select the employee's role"  
      },
      {
        type: "list",
        name: "managerId",
        message: "Who is the employee's manager?"  
      }
    ])
      .then(userChoice => {
        let firstName = userChoice.first_name;
        let lastName = userChoice.last_name;
  
        db.allRoles()
          .then(([rows]) => {
            let roles = rows;
            const roleChoices = roles.map(({ id, title }) => ({
              name: title,
              value: id
            }));
  
            prompt({
              type: "list",
              name: "roleId",
              message: "What is the employee's role?",
              choices: roleChoices
            })
              .then(res => {
                let roleId = res.roleId;
  
                db.findAllEmployees()
                 
              })
          })
      })
  }

//update an employee role
//prompted to select an employee to update and their new role 
//and this information is updated in the database
function updateEmployeeRole() {
    db.allEmployees()
        .then(([rows]) => {
            let employees = rows;
            const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
                name: `${first_name} ${last_name}`,
                value: id
            }));

            prompt([
                {
                    type: "list",
                    name: "employeeId",
                    message: "Which employee's role do you want to update?",
                    choices: employeeChoices
                }
            ])
            
        })
}

// Exit the application
function quit() {
    console.log("Goodbye!");
    process.exit();
  }
  
