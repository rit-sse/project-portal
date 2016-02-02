'use strict';

let Router = require('express').Router;

let router = Router();

router.get('/v1/status', (req, res) => {
  res.json({ ok: ':+1-skintone-6:'});
});

module.exports = router;
