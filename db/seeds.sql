INSERT INTO departments (id, department_name)
VALUES  (001, "Customer Service"),
        (002, "Sales"),
        (003, "Marketing"),
        (004, "Finance"),
        (005, "Technology"),
        (006, "Operations");

INSERT INTO roles (id, title, salary, department_id)
VALUES  (001, "Customer Service Rep", 55000, 001),
        (002, "Inside Sales Manager", 75000, 002),
        (003, "Field Sales Manager", 90000, 002),
        (004, "Marketing Manager", 90000, 003),
        (005, "Communications Manager", 90000, 003),
        (006, "VP of Finance", 175000, 004),
        (007, "Controller", 125000, 004),
        (008, "Chief Technology Officer", 250000, 005),
        (009, "IT Specialist", 70000, 005),
        (010, "VP of Operations", 175000, 006),
        (011, "Regional Operations Manager", 100000, 006);

INSERT INTO employees (id, first_name, last_name, role_id, managers_id)
VALUES  (001, "John", "Legend", 001, 001),
        (002, "Bob", "Dylan", 002, 001),
        (003, "Snoop", "Dogg", 003, 002),
        (004, "Cardi", "B", 004, 002),
        (005, "Kenny", "Chesney", 005, 003),
        (006, "Luke", "Bryan", 006, 003),
        (007, "Lil", "Wayne", 007, 004),
        (008, "Shania", "Twain", 008, 004),
        (009, "Kelsea", "Ballerini", 009, 003),
        (010, "Kasey", "Musgraves", 010, 002);
