CREATE DATABASE IF NOT EXISTS miembros;

USE miembros;

CREATE TABLE miembros (
    pkmember int(10) NOT NULL AUTO_INCREMENT,
    nombre varchar(255) NOT NULL,
    direccion varchar(250) NOT NULL,
    codigo varchar(10) NOT NULL,
    PRIMARY KEY (pkmember)
);

INSERT INTO miembros ( nombre, direccion, codigo) 
    VALUES 
        ( 'Juan Lípez', 'Calle x', '1575' ),
        ( 'Antonio Bermúdez', 'Calle 24', '94330' ),
        ( 'Viridiana Flores', 'Calle 10', '64544' ),
        ( 'Alex Martinez', 'Av 2', '94500' ),
        ( 'Mariela Cruz', 'Av 6', '94500' ),
        ( 'Vannesa', 'Av 10', '94500' ),
        ( 'Ivone', 'Av 10', '94500' ),
        ( 'Moises Flores', 'Calle 42', '94500' ),
        ( 'Luis Alberto Pérez', 'Calle 2', '64544' ),
        ( 'Juan Gonzalez', 'Calle 10', '94330' ),
        ( 'Juan Alberto Muñoz', 'Av 4', '64544' ),
        ( 'Antonio Gutiérrez', 'Av 10', '94500' ),
        ( 'Alberto Zurita', 'Calle 12', '94600' ),
        ( 'Moises Pérez','Calle 24', '94600' ),
        ( 'Sergui Pérez','Calle 30', '94500' );

delimiter $$
	CREATE PROCEDURE sp_getmiembroByIdOrName(in _id int, in _nombre varchar(250))
    BEGIN
		SELECT * FROM miembros WHERE Pkmember = _id OR nombre LIKE concat(trim(_nombre),'%');
    END;
$$
delimiter ;

CALL sp_getmiembroByIdOrName(2,'Antonio');