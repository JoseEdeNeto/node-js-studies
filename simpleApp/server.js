const http = require('http');

function onRequest(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello from application');
    res.end();
}

http.createServer(onRequest).listen(8888);