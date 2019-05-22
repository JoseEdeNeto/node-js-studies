import http from 'http';

http.createServer((req, res) => {
    res.writeHead(200);
    res.write('Hello world is running');
    setTimeout(() => {
        res.write('Hello world is done');
        res.end();
    }, 5000);
}).listen(8080);