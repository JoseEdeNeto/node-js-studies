const http = require('http');
const url = require('url');

function startServer(route, handle){
    function onRequest(req, res){
        let reviewdata = '';
        let pathname = url.parse(req.url).pathname;
        console.log('request received for: ' + pathname)
        req.setEncoding('utf8');
        req.addListener('data', chunk => reviewdata += chunk);

        req.addListener('end', () => route(handle, pathname, res, reviewdata));
    }
    http.createServer(onRequest).listen(8888);
}

exports.startServer = startServer;