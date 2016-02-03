-- Make things in the projects DB
\c projects

BEGIN;

CREATE TABLE acconts
(
  id serial PRIMARY KEY,
  prefered_name varchar(80),
  email varchar(80)
);

CREATE TABLE requests
(
  id serial PRIMARY KEY,
  title text NOT NULL,
  created date NOT NULL
);

COMMIT;
