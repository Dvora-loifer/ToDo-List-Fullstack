
CREATE DATABASE Third_project_data_base;


USE Third_project_data_base;


CREATE TABLE items_tbl (

Id INT NOT NULL AUTO_INCREMENT,

Name VARCHAR(100),

IsComplete TINYINT(1),

PRIMARY KEY(Id)

);
SHOW TABLES;
SHOW COLUMNS FROM items_tbl;