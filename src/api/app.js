
'use strict';

const restify = require('restify')
      ;

function home(req, res, next) {
  res.send('Small Node Seed');
  next();
}

var server = restify.createServer();
server.use(restify.bodyParser());

server.get('/', home);

server.listen(process.env.PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});
