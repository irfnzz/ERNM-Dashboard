-- delete table features
DROP TABLE IF EXISTS features;

-- delete table lookuppermissions
DROP TABLE IF EXISTS lookuppermissions;

-- delete table userroles
DROP TABLE IF EXISTS userroles;

-- delete table techstacks
DROP TABLE IF EXISTS techstacks;

-- delete table lookupemploymenttypes
DROP TABLE IF EXISTS lookupemploymenttypes;

-- delete table lookupskills
DROP TABLE IF EXISTS lookupskills;

-- delete table users
DROP TABLE IF EXISTS users;

-- delete table userskills
DROP TABLE IF EXISTS userskills;

-- delete table authorizations
DROP TABLE IF EXISTS authorizations;

-- delete table reportaudittype
DROP TABLE IF EXISTS reportaudittypes;

-- delete table reportauditaction
DROP TABLE IF EXISTS reportauditactions;

-- delete table reportaudit
DROP TABLE IF EXISTS reportaudits;

-- delete table application;
DROP TABLE IF EXISTS applications;

-- delete table appuser
DROP TABLE IF EXISTS appusers;

-- delete table apptechstacks
DROP TABLE IF EXISTS apptechstacks;


-- delete all data 
TRUNCATE TABLE users;
TRUNCATE TABLE userskills;
TRUNCATE TABLE authorizations;

-- delete all data inside table lookupskills
ALTER TABLE userskills DROP CONSTRAINT fk_skill;
TRUNCATE TABLE lookupskills;
ALTER TABLE userskills ADD CONSTRAINT fk_skill FOREIGN KEY(skillID) REFERENCES lookupskills(id);
SELECT * FROM lookupskills;

-- delete all data inside table lookuppermissions
ALTER TABLE authorizations DROP CONSTRAINT fk_permission;
TRUNCATE TABLE lookuppermissions;
ALTER TABLE authorizations ADD CONSTRAINT fk_permission FOREIGN KEY(permissionID) REFERENCES lookuppermissions(id);
SELECT * FROM lookuppermissions;

-- delete all data inside table lookupemploymenttypes
ALTER TABLE users DROP CONSTRAINT fk_employementtype;
TRUNCATE TABLE lookupemploymenttypes;
ALTER TABLE users ADD CONSTRAINT fk_employementtype FOREIGN KEY(employementtypes) REFERENCES lookupemploymenttypes(id);
SELECT * FROM lookupemploymenttypes;

-- delete all data inside table features
ALTER TABLE authorizations DROP CONSTRAINT fk_feature;
TRUNCATE TABLE features;
ALTER TABLE authorizations ADD CONSTRAINT fk_feature FOREIGN KEY(featureID) REFERENCES features(id);
SELECT * FROM features;

-- delete all data inside table techstacks
ALTER TABLE userskills DROP CONSTRAINT fk_userskill;
TRUNCATE TABLE techstacks;
ALTER TABLE userskills ADD CONSTRAINT fk_userskill FOREIGN KEY(techID) REFERENCES techstacks(id);
SELECT * FROM techstacks;

-- delete all data inside table userroles
ALTER TABLE authorizations DROP CONSTRAINT fk_userrole;
TRUNCATE TABLE userroles;
ALTER TABLE authorizations ADD CONSTRAINT fk_userrole FOREIGN KEY(userRoleID) REFERENCES userroles(id);
SELECT * FROM userroles;