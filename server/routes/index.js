'use strict';

const Router    = require('express').Router,
      utils     = require('../utils'),
      approver  = require('../utils/hooks'),
      schemas   = require('../utils/schemas'),
      Validator = require('jsonschema').Validator,
      Mailer    = require('../mailer')
;

let router    = Router(),
    validator = new Validator()
;

router.get('/v1/approve/:token', (req, res, next) => {
  approver.verify(req.params.token)
    .then( id => {
      console.log(`Email approving ${id}`);
      return utils.approve(id);
    })
    .then( () => {
      res.send("Approved! You can now close this tab");
    })
    .catch(next);
});

router.options('/v1/request', (req, res) => {
  res.send(schemas.request);
});

/**
 {
   "project": 1,
   "part": "A new part",
   "quantity": 1,
   "unit_price": 0.50,
   "shipping": 1.23,
   "link": "https://google.com",
   "purpose": "The Internet"
 }
 */
router.post('/v1/request', (req, res, next) => {
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
      return data;
    })
    .then( resp => {
      let id = resp[0].id;
      Mailer.scheduleEmail(id);
    })
    .catch(next);
});

router.get('/v1/status', (req, res, next) => {
    res.json({ ok: ':+1-skintone-6:' });
});

module.exports = router;
