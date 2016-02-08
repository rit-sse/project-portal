WITH
approvers AS (
	SELECT approver_id as id FROM defaultapprovers WHERE project_id=1
),
approval AS (
	INSERT INTO approval_status(approved_by) VALUES ((select id from approvers)) RETURNING id
) 
INSERT INTO requests(project, requester, part, unit_price, quantity, link, purpose, approval)
VALUES (1, 1, "Part", 0.01, 5, "http://google.com", "Blah Blah", (select id from approval))
RETURNING id;