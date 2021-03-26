-- create db for navigation
CREATE DATABASE navigation;
USE navigation;

CREATE TABLE searchnav (
	id int NOT NULL AUTO_INCREMENT,
    searchtypename varchar(255),
    PRIMARY KEY(id)
);

CREATE TABLE faqnav (
	id int NOT NULL AUTO_INCREMENT,
    faqtypename varchar(255),
    PRIMARY KEY(id)
);

CREATE TABLE userprofilenav (
	id int NOT NULL AUTO_INCREMENT,
    profiletypename varchar(255),
    PRIMARY KEY(id)
);

CREATE TABLE userrolenav (
	id int NOT NULL AUTO_INCREMENT,
    userroletypename varchar(255),
    PRIMARY KEY(id)
);

CREATE TABLE permissionlevelnav (
	id int NOT NULL AUTO_INCREMENT,
    permissiontypename varchar(255),
    PRIMARY KEY(id)
);

CREATE TABLE updateuserprofile (
	id int NOT NULL AUTO_INCREMENT,
    useremail varchar(255),
    userfirstname varchar(255),
    userlastname varchar(255),
    userphonenumber int,
    userpassword int,
    userrole varchar(255),
    userlookupemploymenttypes varchar(255),
    userprofilenavid int,
    PRIMARY KEY(id),
    CONSTRAINT fk_userprofilenavid FOREIGN KEY (userprofilenavid ) REFERENCES userprofilenav(id)
);

CREATE TABLE changeuserpassword (
	id int NOT NULL AUTO_INCREMENT,
    newpassword int,
    userprofilenavid int,
    PRIMARY KEY(id),
    CONSTRAINT fk_userprofilenavid FOREIGN KEY (userprofilenavid ) REFERENCES userprofilenav(id)
);

CREATE TABLE logoutuser (
	id int NOT NULL AUTO_INCREMENT,
    logoutusertype numeric,
    PRIMARY KEY(id)
);

SELECT * FROM searchnav;
SELECT * FROM faqnav;
SELECT * FROM userprofilenav;
SELECT * FROM userrolenav;
SELECT * FROM permissionlevelnav;
SELECT * FROM updateuserprofile;
SELECT * FROM changeuserpassword;
SELECT * FROM logoutuser;






    
    


    

    
    
    
	
	
    
    



