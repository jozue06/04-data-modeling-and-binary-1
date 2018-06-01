'use strict';

const reader = require('../../src/lib/reader');
const CleanBuffer = require('../../src/lib/bitmap');
// const size = require('../../src/lib/size');
const root = __dirname + '/../..';


describe('size module', () => {

  it('should return BM when passed in a bitmap and looking for the this.type', (done) => {
    reader(`${root}/assets/bitmap.bmp`, (err, data) => {

      let cleaned = new CleanBuffer(data);
      expect(cleaned.type).toBe('BM');
      
      done();
    });
  });

});