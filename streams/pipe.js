const fs = require('fs');

const readable = fs.createReadStream('Node-stream-handson/data_file.txt');
readable.setEncoding('UTF8');

const writable = fs.createWriteStream('new_data_file.txt');

readable.pipe(writable);