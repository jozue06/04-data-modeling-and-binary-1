'use strict';

const write = require('../../src/lib/write');
const reader = require('../../src/lib/reader');
const CleanBuffer = require('../../src/lib/bitmap');
const colorFun = require('../../src/lib/colorFun');

const root = __dirname + '/../..';

var testyTest = reader(`${root}/assets/bitmap.js`, (err, data) => {
    if (err) {
    throw err
    } else {
        return new CleanBuffer(data);
    }


    });
    console.log(testyTest);

    var birdBrain = colorFun(testyTest);

    write(`${root}/assets/new.bmp`, birdBrain.buffer, (err) => {
        if (err) throw err; 
            else {
                console.log ('wrtie finished');
            }
        


      });
