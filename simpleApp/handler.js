const querystring = require('querystring');

function home(res){
    console.log('executing home handler');
    const htmlFile = 
    '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head>' +
    '    <meta charset="UTF-8">' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '    <meta http-equiv="X-UA-Compatible" content="ie=edge">' +
    '    <title>Review home</title>' +
    '</head>' +
    '<body>' +
    '    <form action="/review" method="post">' +
    '        <textarea name="text" id="text" cols="60" rows="20"></textarea>' +
    '        <input type="submit" value="Submit Text" />' +
    '    </form>' +
    '</body>' +
    '</html>';
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(htmlFile);
    res.end();
}

function review(res, reviewdata){
    console.log('executing review handler');
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('Your review is ' + querystring.parse(reviewdata).text);
    res.end();
}

exports.home = home;
exports.review = review;