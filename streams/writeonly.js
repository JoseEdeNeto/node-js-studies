const fs = require('fs');

const string = 'Node.js is an ultimate backend javascript for backend development';
const writeStream = fs.createWriteStream('Big_data.txt');

let value = 0;
while (value < Math.pow(10, 5)){
    writeStream.write(string, 'UTF8');
    value++
}
writeStream.end();