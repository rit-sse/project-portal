'use strict';

let express = require('express'),
    http    = require('http'),
    routes  = require('./routes')
;

let app = express();

app.use(routes);

http.createServer(app).listen(process.env.PORT || 3000, () => {
  console.log('Server started and listening...');
});
