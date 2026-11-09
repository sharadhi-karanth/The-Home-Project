CREATE TABLE Customers1
(
    CustomerID INT IDENTITY(1,1) PRIMARY KEY,
    FullName VARCHAR(100) NOT NULL,
    Address VARCHAR(255),
    Phone VARCHAR(10) NOT NULL
);

CREATE TABLE Products
(
    ProductID INT IDENTITY(1,1) PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    Stock DECIMAL(10,3) NOT NULL,
    Unit VARCHAR(20) NOT NULL
);

CREATE TABLE Orders
(
    OrderID INT IDENTITY(1,1) PRIMARY KEY,
    CustomerID INT NOT NULL,
    OrderDate DATETIME DEFAULT GETDATE(),
    TotalAmount DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (CustomerID)
        REFERENCES Customers1(CustomerID)
);


CREATE TABLE OrderItems
(
    OrderItemID INT IDENTITY(1,1) PRIMARY KEY,
    OrderID INT NOT NULL,
    ProductID INT NOT NULL,
    Quantity DECIMAL(10,3) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (OrderID)
        REFERENCES Orders(OrderID),

    FOREIGN KEY (ProductID)
        REFERENCES Products(ProductID)
);

INSERT INTO Products
(ProductName, Price, Stock, Unit)
VALUES
('Areca Nut (Adike)', 100.00, 100.000, 'kg'),
('Paddy (Akki)', 30.00, 100.000, 'kg'),
('Coconut (Tengina Kai)', 20.00, 100.000, 'piece');
use ManeFarmDB
SELECT * FROM Products;

UPDATE Products SET Price = 450 WHERE ProductName = 'Areca Nut (Adike)';
UPDATE Products SET Price = 30 WHERE ProductName = 'Coconut (Tengina Kai)';
UPDATE Products SET Price = 50 WHERE ProductName = 'Paddy (Akki)';

select * from OrderItems;