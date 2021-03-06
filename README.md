# Employee-Tracker
A command-line application that manages a company's employee database, using Node.js, Inquirer, and MySQL.


### Github: https://github.com/hienm9/Employee-Tracker

### My walthrough video: (https://drive.google.com/file/d/1znXb6vdQl95JDv9z9xtKIB9XBje6exL8/view)


## User Story

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance criteria

```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

Technical Acceptance Criteria:
Application front end must connect to an Express.js back end.
Application back end must store notes with unique IDs in a JSON file.
Application must be deployed to Heroku.
```

## Screenshots

![](https://github.com/hienm9/Employee-Tracker/blob/main/assets/images/Start-app.png)
![](https://github.com/hienm9/Employee-Tracker/blob/main/assets/images/Employee-Add.png)
![](https://github.com/hienm9/Employee-Tracker/blob/main/assets/images/Employee-addDepartment.png)
![](https://github.com/hienm9/Employee-Tracker/blob/main/assets/images/EmployeeRole-Add.png)
![](https://github.com/hienm9/Employee-Tracker/blob/main/assets/images/EmployeeRole-update.png)





## Technology used
<p><a href="https://nodejs.org/">Node.js</a></p>
<p><a href="https://expressjs.com/">Express.js</a></p>
<p><a href="https://www.npmjs.com/">NPM</a></p>
<p><a href="https://www.npmjs.com/package/inquirer">Inquirer.js</a></p>
<p><a href="https://www.npmjs.com/package/console.table">Console table package</a></p>
<p><a href="https://www.npmjs.com/package/mysql2">MySQL2 package</a></p>
<p><a href="https://www.mysql.com/">MySQL</a></p>


## Contributors

Hien Mai @2022 All Rights Reserved.
