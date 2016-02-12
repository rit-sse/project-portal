'use strict';

const express = require('express'),
      http    = require('http'),
      routes  = require('./routes'),
      bparser = require('body-parser')
;

let app = express();

app.use(bparser.json());
app.use(routes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  const status = err.status;
  res.status(status || 500).send({ error: err.message });
});

http.createServer(app).listen(process.env.PORT || 3000, () => {
  console.log('Server started and listening...');
});
