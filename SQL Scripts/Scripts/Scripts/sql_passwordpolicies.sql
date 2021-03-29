-- Define password policy
/* 
	The passwords need to fulfill this criteria:
	- Must be minimum length of 10 characters   
	- Must contain uppercase letter (A-Z)
    - Must contain lowercase letter (a-z)
    - Must contain digit numbers (0-9)
    - Must contain special characters (~, %, *, @, #, $, !)
    - Password need to be renew every 6 or 12 months
    
    */

-- DB Schema for password
CREATE DATABASE dashboard;
USE dashboard;

CREATE TABLE IF NOT EXISTS passwordpolicies (
	id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    value varchar(255) NOT NULL,
    isActive int NOT NULL,
    PRIMARY KEY(id)
);

-- Insert values in passwordpolicies table
INSERT INTO passwordpolicies VALUES (1, 'Uppercase Letter', 'A-Z', 1);
INSERT INTO passwordpolicies VALUES (2, 'Lowercase letter', 'a-z', 1);
INSERT INTO passwordpolicies VALUES (3, 'Numbers', '0-9', 1);
INSERT INTO passwordpolicies VALUES (4, 'Special Characters', '~!@#$%&*', 1);
INSERT INTO passwordpolicies VALUES (5, 'Password length', '10 characters', 1);
INSERT INTO passwordpolicies VALUES (6, 'Reset password', 'Every 6/12 months', 1);

-- Show full columns for passwordpolicies
SELECT * FROM passwordpolicies;
