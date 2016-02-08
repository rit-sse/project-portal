-- Make things in the projects DB
\c projects

BEGIN;

CREATE VIEW purchaselist AS
select
    requests.id,
    projects.title as project,
    part,
    link,
    (unit_price * quantity) as price, -- TODO: make total
    quantity,
    purpose,
    accounts.prefered_name as requester,
    purchase.tracking_number as tracking,
    purchase.approved as purchased,
    requests.created as lastModified,
    approval_status.approved
  from requests
  join projects on requests.project=projects.id
  join accounts on requests.requester=accounts.id
  join approval_status on requests.approval=approval_status.id
  left join purchase on requests.purchase=purchase.id
;

CREATE VIEW defaultapprovers AS
select
  	accounts.id as approver_id,
  	projects.id as project_id
  from account_manager_for_project
	join accounts on
		accounts.id=account_manager_for_project.accountid
	join projects on
		projects.id=account_manager_for_project.projectid
;
COMMIT;
