Delimiter $

Create database MerakiShop;

Use MerakiShop;

Create table Productos(Nombre varchar(50) NOT NULL, Categoria varchar(25), Precio int(11) NOT NULL,Img varchar(100) NOT NULL, Id int auto_increment primary key);

Create table Clientes(Nombre varchar(50) NOT NULL, Direccion varchar(50) NOT NULL, Pais varchar(25) NOT NULL,Img varchar(200) NOT NULL, Id int auto_increment primary key);

Create table Pedidos(NombrePedido varchar(50) NOT NULL,Img varchar(200) NOT NULL, NombreCliente varchar(50) NOT NULL, FechaPedido Date NOT NULL, Cantidad int NOT NULL, Total int NOT NULL, Id int auto_increment primary key);

INSERT INTO Productos (nombre, categoria, precio, img) VALUES ('bajo verde', 'jazz', 2500,'https://http2.mlstatic.com/bajo-peavy-dyna-bass-D_NQ_NP_743377-MLM32234191048_092019-F.webp'),('bajo negro', 'reggue', 1403,'https://http2.mlstatic.com/bajo-yamaha-trbx305-nuevo-D_NQ_NP_705160-MLM41900649491_052020-O.webp');

INSERT INTO Clientes(nombre, Direccion, pais, img) VALUES ('Martin Amaro', 'COL Horoscopo MZ62 L2i','Mexico','https://cdn.icon-icons.com/icons2/1769/PNG/512/4092564-about-mobile-ui-profile-ui-user-website_114033.png'),('Asael Garcia', 'Wolfs city #24','Mexico','https://cdn.icon-icons.com/icons2/1769/PNG/512/4092564-about-mobile-ui-profile-ui-user-website_114033.png');

INSERT INTO Pedidos(NombrePedido,img, NombreCliente,FechaPedido,Cantidad,Total) VALUES ('Bajo Negro','https://http2.mlstatic.com/bajo-yamaha-trbx305-nuevo-D_NQ_NP_705160-MLM41900649491_052020-O.webp','martin amaro',NOW(),1,1403),('bajo verde','https://http2.mlstatic.com/bajo-peavy-dyna-bass-D_NQ_NP_743377-MLM32234191048_092019-F.webp','martin amaro','2002-07-08',1,2500);
end $ 