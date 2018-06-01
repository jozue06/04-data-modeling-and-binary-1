'use strict';


const app = require('./src/app');

let original = process.argv[2];
let newFile = process.argv[3];
let transformationString = process.argv[4];

app(original, newFile, transformationString);





