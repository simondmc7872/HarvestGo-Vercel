CREATE TABLE IF NOT EXISTS Products (
    itemid INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    origin VARCHAR(50),
    category VARCHAR(50),
    image_url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Suppliers(
    supid INT PRIMARY KEY,
    supname VARCHAR(50) NOT NULL,
    supaddress VARCHAR(100) NOT NULL,
    contact_info VARCHAR(100),
    min_order_quantity NUMERIC(10),
    supprice NUMERIC(10, 2),
    stock_level VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Main_Warehouse(
    itemid INT REFERENCES Products(itemid) NOT NULL,
    supid INT REFERENCES Suppliers(supid) NOT NULL,
    itemlocation VARCHAR(100) NOT NULL,
    lastrestock DATE,
    cost_of_product NUMERIC(10, 2) NOT NULL,
    mainquantity NUMERIC(10) NOT NULL
);


INSERT INTO Products (itemid, name, description, price, origin, category, image_url)
VALUES 
    (1, 'Alaskan King Crab', 'Alaskan king crab in $/lb', 84.00, 'Alaska', 'seafood', '/images/alaskan_king_crab.png'),
    (2, 'New England Homarus Lobster', 'New England Homarus lobster in $/lb', 20.00, 'Canada/Carolina', 'seafood', '/images/new_england_lobster.png'),
    (3, 'Pacific Manila Clams', 'Pacific Manila clams in $/lb', 15.00, 'Canada/California', 'seafood', '/images/pacific_manila_clams.png'),
    (4, 'Wild Baja White Shrimp', 'fresh wild Baja white shrimp in $/lb', 29.00, 'California', 'seafood', '/images/wild_baja_white_shrimp.png'),
    (5, 'Choice Beef Ribeye Steak', 'boneless USDA choice beef ribeye steak in $/lb', 15.00, 'Canada/Mexico', 'meats', '/images/choice_beef_ribeye_steak.png'),
    (6, 'Chicken Breast', 'premium chicken breast in $/lb', 4.00, 'Iowa', 'poultry', '/images/chicken_breast.png');

INSERT INTO Suppliers (supid, supname, supaddress, contact_info, min_order_quantity, supprice, stock_level)
VALUES
    (101, 'Oceanic Delights Seafood Co.', '123 Pacific Avenue, Anchorage, AK 99501, USA', 'oceanicdelightsseafoodco@gmail.com', 20, 75.00, 'out of stock'),
    (201, 'Neptunes Bounty Seafood Suppliers', '456 Ocean Boulevard, Halifax, NS B3H 4R2, Canada', 'neptunesbountyseafoodsuppliers@gmail.com', 20, 15.00, 'low stock'),
    (301, 'Coastal Catch Seafood Distributors', '789 Beach Road, San Diego, CA 92109, USA', 'coastalcatchseafooddistributors@gmail.com', 20, 10.00, 'medium stock'),
    (401, 'Pacific Seafood Importers', '321 Bay Street, Vancouver, BC V6B 3Y9, Canada', 'pacificseafoodimporters@gmail.com', 20, 20.00, 'medium stock'),
    (501, 'Prime Cuts Meat Supply Co.', '555 Ranchero Drive, Calgary, AB T2E 3H9, Canada', 'primecutsmeatsupplyco@gmail.com', 5, 10.00, 'high stock'),
    (601, 'Farm Fresh Poultry Distributors', '987 Farm Lane, Des Moines, IA 50309, USA', 'farmfreshpoultrydistributors@gmail.com', 10, 3.00, 'high stock');

INSERT INTO Main_Warehouse (itemid, supid, itemlocation, lastrestock, cost_of_product, mainquantity)
VALUES
    (1, 101, 'A1', '2024-10-01', 75.00, 200),
    (2, 201, 'A2', '2024-10-05', 15.00, 400),
    (3, 301, 'A3', '2024-10-10', 10.00, 5000),
    (4, 401, 'A4', '2024-10-06', 20.00, 8000),
    (5, 501, 'B1', '2024-10-08', 10.00, 2500),
    (6, 601, 'C1', '2024-10-02', 3.00, 4000);


SELECT * FROM Products;
SELECT * FROM Main_Warehouse;
SELECT * FROM Suppliers;



/* 
    In practice it is more common to let POSTGRESQL use 
    SERIAL PRIMARY KEY to auto generate incrementing keys. 
    Manually inserted IDs here for simplification. 
*/