const pg = require('pg-then');
const pool = pg.Pool('postgres://admin:alpine@192.168.99.100/projects');

module.exports = {
  createRequest (request) {


    return new Promise( a => a() );

  }
}
