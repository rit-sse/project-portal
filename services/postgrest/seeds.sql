-- Make things in the projects DB
\c projects

BEGIN;

-- Create default accounts
INSERT INTO accounts (name, email) VALUES ('Timbrook', 'timbrook480@gmail.com');
INSERT INTO accounts (name, email) VALUES ('Jesse', 'jrj2307@rit.edu');

-- Create default projects
INSERT INTO projects (name, owner, approver) VALUES ('Holo Desk', 2, 1);


COMMIT;
