DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
    id INT AUTO_INCREMENT,
    roles-id INT,
    department_name VARCHAR(25) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE rolses(
    id INTEGER AUTO_INCREMENT,
    title VARCHAR(25) NOT NULL,
    salary DECIMAL,
    department_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) 
    REFERENCES department(id)
);

CREATE TABLE employees(
    id INT AUTO_INCREMENT,
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    roles_id INT,
    manager_id INT,
    PRIMARY KEY(id)
    FOREIGN KEY(manager_id)
    REFERENCES manager(id)
);