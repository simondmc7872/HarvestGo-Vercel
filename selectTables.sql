      SELECT * FROM Products
      INNER JOIN Main_Warehouse ON Products.itemid = Main_Warehouse.itemid
      INNER JOIN Suppliers ON Main_Warehouse.supid = Suppliers.supid
      