-- Make things in the projects DB
\c projects

BEGIN;

CREATE TABLE accounts
(
  id serial PRIMARY KEY,
  prefered_name varchar(80),
  email varchar(80),
  created date NOT NULL default CURRENT_DATE
);

CREATE TABLE projects
(
  id serial PRIMARY KEY,
  title varchar(80),
  created date NOT NULL default CURRENT_DATE
);

CREATE TABLE account_manager_for_project
(
  projectid integer,
  accountid integer,
  id serial PRIMARY KEY,
  CONSTRAINT account_manager_for_project_accountid_fkey FOREIGN KEY (accountid)
      REFERENCES public.accounts (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT account_manager_for_project_projectid_fkey FOREIGN KEY (projectid)
      REFERENCES public.projects (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE approval_status
(
  id serial PRIMARY KEY,
  approved boolean default FALSE,
  approved_by integer REFERENCES accounts
);

CREATE TABLE purchase
(
  id serial PRIMARY KEY,
  purchaser integer REFERENCES accounts,
  approved boolean default FALSE,
  tracking_number varchar(40),
  additional_info TEXT
);

CREATE TABLE requests
(
  id serial PRIMARY KEY,
  project integer REFERENCES projects,
  requester integer REFERENCES accounts,
  part varchar(80),
  unit_price money,
  quantity integer,
  link varchar(255),
  purpose TEXT,
  approval integer REFERENCES approval_status,
  purchase int, -- Nullable referance to a purchase
  created date NOT NULL default CURRENT_DATE
);

CREATE TABLE notifications
(
  id serial PRIMARY KEY,
  account integer REFERENCES accounts,
  request integer REFERENCES requests,
  ack BOOLEAN,
  created date NOT NULL default CURRENT_DATE
);

COMMIT;
