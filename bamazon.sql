DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Stale Dog Food", "Geriatric Supplies", 3.50, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gold Plated Potato", "Sport Equipment", 41, 1500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pickled Raddish", "Cleaning Supplies", 4.99, 2000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Turtle in a box", "Home Entertainment", 102.50, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pickled Turtle", "Cleaning Supplies", 800.8, 3000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Turtle Shaped Bong", "Kitchen Utensils", 17.50, 20000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Plate of Candy Corn", "Sport Equipment", 0.50, 3200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Scented Candles", "Home Entertainment", 520.10, 90);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Scented Candles", "Home Entertainment", 25.90, 1000);
