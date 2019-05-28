const http = require('http');
const url = require('url');

function startServer(route, handle){
    function onRequest(req, res){
        let data = '';
        let pathname = url.parse(req.url).pathname;
        req.setEncoding('utf8');
        req.addListener('data', chunk => data += chunk);
        req.addListener('end', () => route(handle, pathname, req, res, data));
    }
    http.createServer(onRequest).listen(8888);
}

exports.startServer = startServer;