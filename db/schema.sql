DROP DATABASE IF EXISTS business;
CREATE DATABASE business;

USE business

CREATE TABLE department(
    id INT AUTO_INCREMENT,
    roles-id INT,
    department-name VARCHAR(25) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLES rolses(
    id INT AUTO_INCREMENT,
    title VARCHAR(25) NOT NULL,
    salary DECIMAL,
    department_id INT,
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
    REFERENCES employees (id)
);