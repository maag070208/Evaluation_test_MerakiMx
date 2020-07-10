Delimiter $

Create database MerakiShop;

Use MerakiShop;

Create table Productos(Nombre varchar(50) NOT NULL, Categoria varchar(25), Precio int(11) NOT NULL, Id int auto_increment primary key);

Create table Clientes(Nombre varchar(50) NOT NULL, Direccion varchar(50) NOT NULL, Pais varchar(25) NOT NULL, Id int auto_increment primary key);

Create table Pedidos(NombrePedido varchar(50) NOT NULL, NombreCliente varchar(50) NOT NULL, FechaPedido Date NOT NULL, Cantidad int NOT NULL, Total int NOT NULL, Id int auto_increment primary key);

INSERT INTO Productos (nombre, categoria, precio) VALUES ('bajo verde', 'jazz', 2500),('bajo rojo', 'reggue', 1403);

INSERT INTO Clientes(nombre, Direccion, pais) VALUES ('Martin Amaro', 'COL Horoscopo MZ62 L2i','Mexico'),('Asael Garcia', 'Wolfs city #24','Mexico');

INSERT INTO Pedidos(NombrePedido,NombreCliente,FechaPedido,Cantidad,Total) VALUES ('bajo rojo','martin amaro',NOW(),1,1403),('bajo verde','martin amaro',NOW(),1,2500);
end$ 