const qs = require('querystring');
const fs = require('fs');

function home(req, res, data){
    if(req.method == 'POST'){
        let q = qs.parse(data);
        let info = '{ fname: \'' + q.fname + '\', age: \'' + q.age + '\', Sname: \'' + q.Sname + '\' }';
        console.log(info);
        const writeableStream = fs.createWriteStream('output.txt');
        writeableStream.write(info);
        writeableStream.end();
    } else {
        const htmlFile = '<!doctype html>  <html>  <body> <form action="/" method="post"> <input type="text" name="fname" />first name<br /> <input type="number" name="age" />age<br /> <input type="text" name="Sname" />last name<br /> <button>Save</button>  </form>  </body> </html>';
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(htmlFile);
        res.end();
    }
}

exports.home = home;