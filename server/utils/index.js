'use strict';

const pg  = require('pg-then'),
      sql = require('sql-template-strings')
;

const pool = pg.Pool('postgres://admin:alpine@192.168.99.100/projects');

module.exports = {
  createRequest (r) {

    let approverid = 1;

    return pool.query(sql`
      WITH approval AS (
        INSERT INTO approval_status(approved_by) VALUES (${approverid}) RETURNING id
      ) INSERT INTO public.requests(project, requester, part, unit_price, quantity, link, purpose, approval)
        VALUES (${r.project}, 1, ${r.part}, ${r.unit_price}, ${r.quantity}, ${r.link}, ${r.purpose}, (select id from approval))
        RETURNING id;
    `)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      if (err.message.indexOf("requests_project_fkey") > 0) {
        let err  = new Error("Project does not exist")
        err.status = 412;
        throw err;
      }
    });
  }
}
