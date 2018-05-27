'use strict';

const write = require('../../src/lib/write');
const reader = require('../../src/lib/reader');
const CleanBuffer = require('../../src/lib/bitmap');
const colorFun = require('../../src/lib/colorFun');

const root = __dirname + '/../..';

describe('colorFun module', () => {

  it('should change all the color values to 0, the view will be black', (done) => {

    reader(`${root}/assets/bitmap.bmp`, (err, data) => {
      // console.log(err);
      let cleaned = new CleanBuffer(data);
      //(colorFun);
      console.log(cleaned.colorTable);
      var black = colorFun(cleaned);
      console.log(black.colorTable);
      console.log(black.type);
      write(`${root}/assets/new.bmp`, black.buffer, (err) => {
        if (err) throw err;

      });
      expect(err).not.toBeUndefined();
      done();

    });
  });

});