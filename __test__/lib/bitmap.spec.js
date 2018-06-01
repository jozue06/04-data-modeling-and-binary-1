'use strict';

const reader = require('../../src/lib/reader');
const CleanBuffer = require('../../src/lib/bitmap');
const colorFun = require('../../src/lib/colorFun')
;const root = __dirname + '/../..';

describe('bitmap module', () => {

  it('should return BM when passed in a bitmap and looking for the this.type', (done) => {
    reader(`${root}/assets/town.bmp`, (err, data) => {

      let cleaned = new CleanBuffer(data);
      console.log(cleaned.type);
      console.log(cleaned.height);
      console.log(cleaned.numColors);
      console.log(cleaned.raster);
      console.log(colorFun.invert(cleaned).raster);
      expect(cleaned.type).toBe('BM');
      
      done();
    });
  });

});