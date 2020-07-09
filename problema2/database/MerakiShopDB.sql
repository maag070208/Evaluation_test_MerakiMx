Delimiter$

Create database MerakiShop;

Use MerakiShop;

Create table Productos(Nombre varchar(50) NOT NULL, Categoria varchar(25), Precio int(11) NOT NULL, Id int auto_increment primary key);

Create table Clientes(Nombre varchar(50) NOT NULL, Direccion varchar(50) NOT NULL, Pais varchar(25) NOT NULL, Id int auto_increment primary key);

Create table Pedidos(NombrePedido varchar(50), NombreCliente varchar(50), FechaPedido Date, Cantidad int, Total int, Id int auto_increment primary key);

INSERT INTO Productos (nombre, categoria, precio) VALUES ('bajo verde', 'jazz', 2500),('bajo rojo', 'reggue', 1403);

INSERT INTO Clientes(nombre, Direccion, pais) VALUES ('Martin Amaro', 'COL Horoscopo MZ62 L2i','Mexico'),('Asael Garcia', 'Wolfs city #24','Mexico');

end$ 