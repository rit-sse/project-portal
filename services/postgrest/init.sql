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

CREATE TABLE approval_status
(
  id serial PRIMARY KEY,
  approved boolean,
  approved_by integer REFERENCES accounts
);

CREATE TABLE purchase
(
  id serial PRIMARY KEY,
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

-- END DATA START VIEWS

CREATE VIEW purchaselist AS
select
    requests.id,
    projects.title as project,
    part,
    link,
    unit_price as price, -- TODO: make total
    quantity,
    purpose,
    accounts.prefered_name as requester,
    purchase.tracking_number as tracking,
    purchase.id::boolean as purchased,
    requests.created as lastModified
  from requests
  join projects on requests.project=projects.id
  join accounts on requests.requester=accounts.id
  join approval_status on requests.approval=approval_status.id
  left join purchase on requests.purchase=purchase.id
;
