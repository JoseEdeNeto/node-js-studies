import http from 'http';

http.createServer((req, res) => {
    res.writeHead(200);
    res.write('Hello world');
    res.end();
}).listen(8080);

console.log('listening on port 8080');