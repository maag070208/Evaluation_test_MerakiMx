Delimiter $

Create database MerakiShop;

Use MerakiShop;

Create table Productos(Nombre varchar(50) NOT NULL, Categoria varchar(25), Precio int(11) NOT NULL,Img varchar(100) NOT NULL, Id int auto_increment primary key);

Create table Clientes(Nombre varchar(50) NOT NULL, Direccion varchar(50) NOT NULL, Pais varchar(25) NOT NULL,Img varchar(200) NOT NULL, Id int auto_increment primary key);

Create table Pedidos(NombrePedido varchar(50) NOT NULL,Img varchar(200) NOT NULL, NombreCliente varchar(50) NOT NULL, FechaPedido varchar(15) NOT NULL, Cantidad int NOT NULL, Total int NOT NULL, Id int auto_increment primary key);

INSERT INTO Productos (nombre, categoria, precio, img) VALUES ('Bajo Negro', 'reggue', 2500,'https://http2.mlstatic.com/bajo-yamaha-trbx305-nuevo-D_NQ_NP_705160-MLM41900649491_052020-O.webp');

INSERT INTO Clientes(nombre, Direccion, pais, img) VALUES ('Martin Amaro', 'COL Horoscopo MZ62 L2i','Mexico','https://cdn.icon-icons.com/icons2/1769/PNG/512/4092564-about-mobile-ui-profile-ui-user-website_114033.png');

INSERT INTO Pedidos(NombrePedido,img, NombreCliente,FechaPedido,Cantidad,Total) VALUES ('Bajo Negro','https://http2.mlstatic.com/bajo-yamaha-trbx305-nuevo-D_NQ_NP_705160-MLM41900649491_052020-O.webp','martin amaro','08/07/2002',1,2500);



end $ 