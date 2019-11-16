DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL (10,2) default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Windex', 'Cleaning', 12.95, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Colgate Toothpaste', 'Hygiene', 3.98, 300);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Death Stranding (PS4)', 'Video Games', 59.88, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Lavashak (5pk)', 'Grocery', 12.99, 7);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Scotch Packing Tape w/Dispenser (5pk)', 'Office Supplies', 15.75, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Cinco D-Pants', 'Hygiene', 19.89, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Cinco's 'It's Not Jackie Chan'", 'Family Games', 19.54, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Rice Cooker', 'Kitchen', 45.65, 27);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Pokemon Shield (Switch)', 'Video Games', 59.99, 43);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Pokemon Sword (Switch)', 'Video Games', 59.99, 27);