-- Make things in the projects DB
\c projects

BEGIN;

CREATE VIEW purchaselist AS
select
    requests.id,
    projects.name as project,
    purchase.part,
    (purchase.unit_price * purchase.quantity + purchase.shipping) as price,
    requests.approved,
    accounts.name as requester,
    purchase.quantity,
    purchase.link,
    purchase.purpose
  from requests
  join projects on requests.project=projects.id
  join purchase on requests.purchase=purchase.id
  join accounts on requests.requester=accounts.id
;

COMMIT;
