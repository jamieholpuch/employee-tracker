const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection
    }
    viewDepartments() {
        return this.connection.promise().query(
            'SELECT departments.id, departments.department_name FROM departments;'
        )
    }
    viewEmployees() {
        return this.connection.promise().query(
            'SELECT employees.id, employees.first_name, employees.last_name, employees.role_id, employees.managers_id FROM employees LEFT JOIN roles ON employees.role_id = roles.id;'
        )
    }
    viewRoles() {
        return this.connection.promise().query(
            'SELECT roles.id, roles.title, roles.salary, departments.department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.id;'
        )
    }
    addDepartments(data) {
        return this.connection.promise().query(
            'INSERT INTO departments SET ?', data
        )
    }
    addEmployees(first_name) {
        return this.connection.promise().query(
            'INSERT INTO employees SET ?', first_name
        )
    }
    addRoles(roleData) {
        return this.connection.promise().query(
            'INSERT INTO roles SET ?', roleData
        )
    }
    updateEmployeeRoles(newRole) {
        return this.connection.promise().query(
            'INSERT INTO employees SET ?', newRole
        )
    }
}

module.exports = new DB(connection);

