const { readFileSync, readFile } = require('node:fs');

const result = readFileSync('isi.txt', 'utf-8');

readFile()

console.log(result);