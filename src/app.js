// 'use strict';


// const reader = require('./src/lib/reader');
// const CleanBuffer = require('./src/lib/bitmap');
// const changeColors = require('./src/lib/colorFun');
// const write = require('./src/lib/write');

// const root = __dirname;

// console.log('dir name is dir name', __dirname);

// var testyTest;

// reader(`${root}/assets/bitmap.bmp`, (err, data) => {
//   if (err) {
//     throw err;
//   } else {

//     testyTest = new CleanBuffer(data);

//     // var allBlack = changeColors.colorFun(testyTest);
//     var invert = changeColors.invert(testyTest);
//     console.log(invert);

//     write(`${root}/assets/newDuck.bmp`, invert.buffer, (err) => {
//       if (err) throw err;
//       else {
//         console.log('write finished');
//       }
//     });


//   }
//   console.log('first one', testyTest);


// });
// console.log('second one', testyTest);




