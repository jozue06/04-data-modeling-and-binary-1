'use strict';


const reader = require('./lib/reader');
const CleanBuffer = require('./lib/bitmap');
const changeColors = require('./lib/colorFun');
const write = require('./lib/write');

const root = __dirname;



function app(oldPath, newPath, transformationString) {
  let transformation;

  switch (transformationString) {
  case 'invert':
    transformation = changeColors.invert;
    break;

  case 'darken':
    transformation = changeColors.darken;
    break;

  case 'lighten':
    transformation = changeColors.lighten;
    break;

  }
  reader(`${root}/../assets/${oldPath}`, (err, data) => {
    if (err) {
      throw err;
    } else {

      let cleaned = new CleanBuffer(data);

      var newBuffer = transformation(cleaned);

      write(`${root}/../assets/${newPath}`, newBuffer.buffer, (err) => {
        if (err) throw err;
        else {
          console.log('write finished');
        }
      });

    }

  });
}

 module.exports = app;

