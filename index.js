'use strict';


const reader = require('./src/lib/reader');
const CleanBuffer = require('./src/lib/bitmap');
const colorFun = require('./src/lib/colorFun');
const write = require('./src/lib/write');

const root = __dirname;

console.log('dir name is dir name', __dirname);

var testyTest;

reader(`${root}/assets/bitmap.bmp`, (err, data) => {
    if (err) {
    throw err
    } else {
        
        testyTest = new CleanBuffer(data);

        var birdBrain = colorFun(testyTest);

    write(`${root}/assets/new.bmp`, birdBrain.buffer, (err) => {
        if (err) throw err; 
            else {
                console.log ('wrtie finished');
            }
        


      });

        
    }
    console.log('first one', testyTest);


    });
    console.log('second one', testyTest);

    

