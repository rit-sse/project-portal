'use strict';

const Router    = require('express').Router,
      utils     = require('../utils'),
      schemas   = require('../utils/schemas'),
      Validator = require('jsonschema').Validator
;

let router    = Router(),
    validator = new Validator()
;

router.options('/v1/request', (req, res) => {
  res.send(schemas.request);
});

router.put('/v1/request', (req, res, next) => {
  let r = validator.validate(req.body, schemas.request);
  if (r.errors.length > 0) {
    let err = r.errors.pop();
    err.status = 400;
    next(err);
    return
  }
  utils
    .createRequest(req.body)
    .then( data => {
      res.status(201);
      res.send(data);
    })
    .catch(next);
});

router.get('/v1/status', (req, res, next) => {
    res.json({ ok: ':+1-skintone-6:' });
});

module.exports = router;
