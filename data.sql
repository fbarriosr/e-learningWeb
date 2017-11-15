-----------------------------------------------------------------
-- borrar base de datos --
-----------------------------------------------------------------

drop table usuario;


-----------------------------------------------------------------
-- crea base de datos --
-----------------------------------------------------------------
create table usuario (
	id MEDIUMINT NOT NULL AUTO_INCREMENT,
	name     	 char(50),
	lastname     char(50),
	rut     	 char(50),
	email        char(50),
	phone        char(50),
	fecha		 datetime default CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
	);


insert into usuario (name , lastname , rut, email , phone) 
values('pancho', 'barrios','16105158-6','francisco.barriosr@gmail.com', '235435');


																																															
								
/*SELECT * FROM `usuario` WHERE  `fecha` >= CURDATE()  ORDER BY RAND() LIMIT 1 */
