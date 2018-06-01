'use strict';

const reader = require('../../src/lib/reader');
const CleanBuffer = require('../../src/lib/bitmap');
const colorFun = require('../../src/lib/colorFun');

const root = __dirname + '/../..';

describe('colorFun module', () => {

  it('colorFun.invert() should invert all colors(e.g black, 0, should be white, 255)', (done) => {

    reader(`${root}/assets/bitmap.bmp`, (err, data) => {

      expect(err).toBeNull();

      let cleaned = new CleanBuffer(data);

      expect(cleaned.colorTable[0]).toBe(0);

      colorFun.invert(cleaned);

      expect(cleaned.colorTable[0]).toBe(255);
      done();

    });
  });

  it('colorFun.invert() should invert all colors(e.g black, 0, should be white, 255) for a bmp that does not have a color palette ', (done) => {

    reader(`${root}/assets/duck.bmp`, (err, data) => {

      expect(err).toBeNull();

      let cleaned = new CleanBuffer(data);

      expect(cleaned.raster[0]).toBe(255);

      colorFun.invert(cleaned);

      expect(cleaned.raster[0]).toBe(0);
      done();

    });
  });

  it('colorFun.darken() should reduce every R, G, B value of a bmp by half)', (done) => {

    reader(`${root}/assets/bitmap.bmp`, (err, data) => {

      expect(err).toBeNull();

      let cleaned = new CleanBuffer(data);

      expect(cleaned.colorTable[4]).toBe(52);

      colorFun.darken(cleaned);

      expect(cleaned.colorTable[4]).toBe(26);
      done();

    });
  });

  it('colorFun.darken() should reduce every R, G, B value of a bmp by half for a bmp that does not use a color palette)', (done) => {

    reader(`${root}/assets/town.bmp`, (err, data) => {

      expect(err).toBeNull();

      let cleaned = new CleanBuffer(data);

      expect(cleaned.raster[400]).toBe(100);

      colorFun.darken(cleaned);

      expect(cleaned.raster[400]).toBe(50);
      done();

    });
  });

  it('colorFun.lighten() should reduce every R, G, B value of a bmp by 50)', (done) => {

    reader(`${root}/assets/bitmap.bmp`, (err, data) => {

      expect(err).toBeNull();

      let cleaned = new CleanBuffer(data);

      expect(cleaned.colorTable[4]).toBe(52);

      colorFun.lighten(cleaned);

      expect(cleaned.colorTable[4]).toBe(102);
      done();

    });
  });

  it('colorFun.lighten() should reduce every R, G, B value of a bmp by 50 for a bmp that does not use a color palette)', (done) => {

    reader(`${root}/assets/town.bmp`, (err, data) => {

      expect(err).toBeNull();

      let cleaned = new CleanBuffer(data);

      expect(cleaned.raster[400]).toBe(100);

      colorFun.lighten(cleaned);

      expect(cleaned.raster[400]).toBe(150);
      done();

    });
  });

});