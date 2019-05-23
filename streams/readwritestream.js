const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');
let data = '';
readableStream.setEncoding('UTF8');
readableStream.on('data', chunk => data += chunk);
readableStream.on('end', () => console.log(data));

const writeData = 'Hello World';
const writeableStream = fs.createWriteStream('output.txt');
writeableStream.write(writeData, 'UTF8');
writeableStream.end();
writeableStream.on('finish', () => console.log('Write complete'));
