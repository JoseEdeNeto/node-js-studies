function route(handle, pathname, req, res, data){
    if(typeof handle[pathname] === 'function'){
        handle[pathname](req, res, data);
    } else {
        console.log('no handler for ' + pathname);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Error 404 page not found');
        res.end();
    }
}

exports.route = route;