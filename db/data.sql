use axso-db;

CREATE TABLE `usuario` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) NOT NULL,
  `email` varchar(180) NOT NULL,
  `telefono` int unsigned NOT NULL,
  `direccion` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `usuario`(`id`,`nombre`,`email`,`telefono`,`direccion`) VALUES
(1,'Juan Perez Gomez','jperez@gmail.com',234123128,'Piccadilly Circus'),
(2,'Marta Garcia Ripoll','mgarcia@gmail.com',264121432,'Abbey Road'),
(3,'David Fernandez Correa','dfernandez@gmail.com',298564432,'Brick Lane');