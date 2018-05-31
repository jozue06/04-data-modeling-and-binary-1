'use strict';


const reader = require('./src/lib/reader');
const CleanBuffer = require('./src/lib/bitmap');
const changeColors = require('./src/lib/colorFun');
const write = require('./src/lib/write');

const root = __dirname;

let original = process.argv[2];
let newFile = process.argv[3];
let transformation = process.argv[4];

console.log('dir name is dir name', __dirname);

reader(`${root}/assets/${original}`, (err, data) => {
  if (err) {
    throw err;
  } else {

    let cleaned = new CleanBuffer(data);

    var newBuffer = changeColors.invert(cleaned);
    
    // var newBuffer = transformation(cleaned);
    write(`${root}/assets/${newFile}`, newBuffer.buffer, (err) => {
      if (err) throw err;
      else {
        console.log('write finished');
      }
    });


  }

});




