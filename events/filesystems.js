/* var fs = require('fs');

fs.mkdirSync('Node_folder');

fs.appendFile('Node_folder/sample.txt', 'This is Node.js a powerful backend '+
                'javascript used very widely in industry for developing web applications.', 
                function (err) {
                    if (err) throw err;
                }); */

const fs = require('fs');
const http = require('http');

fs.writeFile('Sample.html', '<!DOCTYPE html> <html> <body>' +
    '<h2>Welcome ! what would you like to have</h2>' +
    '<ul>  <li>Coffee</li>  <li>Tea</li> <li>Milk</li> </ul>  <body> <html>', 
    err => {
        if (err) throw err;
    });
    
fs.readFile('Sample.html', (err, html) => {
    if (err) {
        throw err; 
    }       
    http.createServer((request, response) => {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(3000);
});