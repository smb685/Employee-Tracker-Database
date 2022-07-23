USE employee_db;



INSERT INTO department(department_name)
VALUES 
('Cashier'),
('Teamlead'),
('Store Manager'),
('Stocker'),
('Inventory');

INSERT INTO role(title, salary, department_id)
VALUES
('Cashier Manager', 32000, 1),
('Teamlead Manager', 20000, 2),
('Store Manager', 28000, 3),
('Stocker', 23000, 4),
('Inventory Manager', 38000, 5); 


INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES
(1, 'James', 'Sparks', '1', '1'),
(2, 'Lebron', 'James', '2', '2'),
(3, 'Sylvester', 'Brandon', '3', '3'),
(4, 'Ann', 'Helper', '4', '4'),
(5,'Courage', 'Jackson', '5', '5'),
(6, 'Spongebob', 'Squarepants','1', '1'),
(7, 'Patrick', 'Star','2', '2');

