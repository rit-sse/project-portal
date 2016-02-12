'use strict';

const pg  = require('pg-then'),
      sql = require('sql-template-strings')
;

const pool = pg.Pool('postgres://admin:alpine@192.168.99.100/projects');

module.exports = {
  createRequest (r) {

    let activeUserId = 1;

    return pool.query(sql`
      WITH
      purchase AS (
        INSERT INTO purchase(part, unit_price, shipping, quantity, link, purpose)
          VALUES (${r.part}, ${r.unit_price}, ${r.shipping}, ${r.quantity}, ${r.link}, ${r.purpose})
          RETURNING id
        )
      INSERT INTO requests(project, purchase, requester)
        VALUES (${r.project}, (SELECT id FROM purchase), ${activeUserId})
        RETURNING id;
    `)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      if (err.message.indexOf("requests_project_fkey") > 0) {
        let err  = new Error("Project does not exist");
        err.status = 412;
        throw err;
      }
      throw err;
    });
  },
  getRequest(id) {
    return pool.query(sql`
      select purchase.part, projects.name
      from requests
      join projects on requests.project=projects.id
      join purchase on requests.purchase=purchase.id
      where requests.id=${id}`)
      .then(data => data.rows[0]);
  },
  approve(id) {
    return pool.query(sql`
      UPDATE requests SET approved=TRUE WHERE id=${id}
    `);
  }
}
