\c projects

BEGIN;

CREATE TABLE requests
(
  id serial PRIMARY KEY,
  title text NOT NULL,
  year date NOT NULL
);

COMMIT;
