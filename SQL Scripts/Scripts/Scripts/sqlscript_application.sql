DROP DATABASE dashboard;
CREATE DATABASE dashboard ;
USE dashboard;

CREATE TABLE IF NOT EXISTS lookupemploymenttypes (
	id int NOT NULL AUTO_INCREMENT,
    typename varchar(255),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS lookuppermissions (
	id int NOT NULL AUTO_INCREMENT,
    permissionname varchar(255),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS lookupskills (
	id int NOT NULL AUTO_INCREMENT,
    skillname varchar(255),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS userroles (
	id int NOT NULL AUTO_INCREMENT,
    rolename varchar(255),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS techstacks (
	id int NOT NULL AUTO_INCREMENT,
    techname varchar(255),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS features (
	id int NOT NULL AUTO_INCREMENT,
    featurename varchar(255),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS users (
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    pass varchar(255) NOT NULL,
    employementtype int,
    contractstartdate date,
    contractenddate date,
    dailyrate float,
    PRIMARY KEY(id),
    CONSTRAINT fk_employementtype FOREIGN KEY (employementtype) REFERENCES lookupemploymenttypes(id)
);

CREATE TABLE IF NOT EXISTS userskills (
	id int NOT NULL AUTO_INCREMENT,
    userid int,
    techid int,
    skillid int,
    PRIMARY KEY(id),
    CONSTRAINT fk_user FOREIGN KEY (userid) REFERENCES users(id),
    CONSTRAINT fk_userskill FOREIGN KEY (techid) REFERENCES techstacks(id),
    CONSTRAINT fk_skill FOREIGN KEY (skillid) REFERENCES lookupskills(id)
);

CREATE TABLE IF NOT EXISTS authorizations (
	id int NOT NULL AUTO_INCREMENT,
    userroleid int,
    featureid int,
    permissionid int, 
    PRIMARY KEY(id),
    CONSTRAINT fk_userrole FOREIGN KEY (userroleid) REFERENCES userroles(id),
    CONSTRAINT fk_feature FOREIGN KEY (featureid) REFERENCES features(id),
    CONSTRAINT fk_permission FOREIGN KEY (permissionid) REFERENCES lookuppermissions(id)
);

CREATE TABLE IF NOT EXISTS reportaudittypes (
	id int,
	audittypename varchar(255),
	PRIMARY KEY (id)
);

create table IF NOT EXISTS reportauditactions (
	id int,
	auditactionname varchar(255),
	PRIMARY KEY (id)
);

create table IF NOT EXISTS reportaudits (
	id int NOT NULL AUTO_INCREMENT,
	userid int, 
	audittypeid int,
	reportauditactionid int,
	completeddate date, 
	pastvalue varchar(255),
	currentvalue varchar(255),
	PRIMARY KEY (id),
	CONSTRAINT fk_userid FOREIGN KEY (userid) REFERENCES users(id),
	CONSTRAINT fk_audittypeid FOREIGN KEY (audittypeid) REFERENCES reportaudittypes(id),
	CONSTRAINT fk_reportauditactionid FOREIGN KEY (reportauditactionid) REFERENCES reportauditactions(id)
);

create table IF NOT EXISTS applications (
	id int NOT NULL AUTO_INCREMENT, 
	appname varchar(255), 
	appurl varchar(255), 
	devopslink varchar(255),
	datecreated date, 
	datemodified date,
	comments varchar(255),
	PRIMARY KEY (id)
);

create table IF NOT EXISTS appusers (
	id int NOT NULL AUTO_INCREMENT,
	appid int,
	userid int, 
	userroleid int, 
	startdate date,
	enddate date,
	PRIMARY KEY (id),
	CONSTRAINT fk_appid FOREIGN KEY (appid) REFERENCES applications(id),
	CONSTRAINT fk_usersid FOREIGN KEY (userid) REFERENCES users(id),
	CONSTRAINT fk_usersrole FOREIGN KEY (userroleid) REFERENCES userroles(id)
);

create table IF NOT EXISTS apptechstacks (
	id int NOT NULL AUTO_INCREMENT,
	appid int,
	techid int,
	PRIMARY KEY (id),
	CONSTRAINT fk_applid FOREIGN KEY (appid) REFERENCES applications(id),
	CONSTRAINT fk_techid FOREIGN KEY (techid) REFERENCES techstacks(id)
);

SELECT * FROM lookupskills;
SELECT * FROM lookuppermissions;
SELECT * FROM lookupemploymenttypes;
SELECT * FROM features;
SELECT * FROM techstacks;
SELECT * FROM userroles;

SELECT * FROM reportaudits;
SELECT * FROM reportauditactions;
SELECT * FROM reportaudittypes;
SELECT * FROM applications;
SELECT * FROM appusers;
SELECT * FROM apptechstacks;
