const server = require('./server');
const router = require('./router');
const handler = require('./handler');

let handle = {};
handle['/'] = handler.home;

server.startServer(router.route, handle);