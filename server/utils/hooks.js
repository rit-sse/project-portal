'use strict';

const config = require('../config'),
      redis  = require('redis'),
      client = redis.createClient(config.redis),
      uuid   = require('uuid'),
      jwt    = require('json-web-token')
;

module.exports = {
  requestTokenForApprover(id) {
    return new Promise( (acc, rej) => {
      let identifier = uuid.v4();
      let key = uuid.v4();
      jwt.encode(key, {identifier}, (res, token) => {
        let info = {
          id, secret: key
        }
        client.set(identifier, JSON.stringify(info));
        client.expire(identifier, 86400);
        acc(token);
      });
    });
  },
  verify(token) {
    return new Promise( (acc, rej) => {
      let components = token.split('.');
      let payload = new Buffer(components[1], 'base64');
      let untrust = JSON.parse(payload.toString('utf8'));
      client.get(untrust.identifier, (err, data) => {
        if (err || !data) {
          let e = new Error("Invalid token");
          e.status = 400;
          rej(e);
        } else {
          let response = JSON.parse(data);
          jwt.decode(response.secret, token, (err, trusted) => {
            if (err) {
              let e = new Error("Invalid token");
              e.status = 400;
              rej(e);
            } else {
              acc(response.id);
              client.del(untrust.identifier);
            }
          });
        }
      });
    })
  }
};
