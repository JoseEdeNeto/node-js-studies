const http = require('http');
const url = require('url');

function startServer(route){
    function onRequest(req, res){
        let pathname = url.parse(req.url).pathname;
        console.log('request received for: ' + pathname)
        route(pathname);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello from application');
        res.end();
    }
    http.createServer(onRequest).listen(8888);
}

exports.startServer = startServer;