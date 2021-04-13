DROP DATABASE dashboard;
CREATE DATABASE dashboard;
USE dashboard;

CREATE TABLE lookupnavmenutypes (
	id int NOT NULL AUTO_INCREMENT,
    navmenutypename varchar(255),
    PRIMARY KEY(id)
);

CREATE TABLE navmenuitems (
	id int NOT NULL AUTO_INCREMENT,
    navmenutypesid int,
    menuitemsid int,
    sortsequences int,
    iconurl varchar(1000),
    datacreated date,
    PRIMARY KEY(id),
    CONSTRAINT fk_navmenutypeid FOREIGN KEY (navmenutypesid) REFERENCES lookupnavmenutypes(id)
);

SELECT*FROM lookupnavmenutypes;
SELECT*FROM navmenuitems;