'use strict';

const reader = require('../../src/lib/reader');
const CleanBuffer = require('../../src/lib/bitmap');
const colorFun = require('../../src/lib/colorFun');

const root = __dirname + '/../..';

describe('colorFun module', () => {

  // it('should change all the color values to 0, the view will be black', (done) => {

  //   reader(`${root}/assets/bitmap.bmp`, (err, data) => {

      
  //     let cleaned = new CleanBuffer(data);
  //     var black = colorFun(cleaned);
  //     expect(err).toBeNull();
  //     expect(black.colorTable[0]).toBe(0);
  //     done();

  //   });
  // });

});