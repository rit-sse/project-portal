-- Make things in the projects DB
\c projects

BEGIN;

CREATE TABLE accounts
(
  id serial PRIMARY KEY,
  name varchar(80),
  email varchar(80) check ( email ~* '^.+@.+\..+$' ),
  created date NOT NULL default CURRENT_DATE
);

CREATE TABLE projects
(
  id serial PRIMARY KEY,
  name varchar(80),
  owner integer REFERENCES accounts,
  approver integer REFERENCES accounts,
  created date NOT NULL default CURRENT_DATE
);

CREATE TABLE purchase
(
  id serial PRIMARY KEY,
  part varchar(80),
  unit_price money,
  shipping money,
  quantity integer,
  link varchar(255),
  purpose TEXT,
  tracking_number varchar(40),
  additional_info TEXT,
  created date NOT NULL default CURRENT_DATE
);

CREATE TABLE requests
(
  id serial PRIMARY KEY,
  project integer REFERENCES projects,
  purchase integer REFERENCES purchase,
  purchaser integer REFERENCES accounts,
  requester integer REFERENCES accounts,
  approved boolean default FALSE,
  created date NOT NULL default CURRENT_DATE
);

COMMIT;
