'use strict';

const reader = require('../../src/lib/reader');
const CleanBuffer = require('../../src/lib/bitmap');

const root = __dirname + '/../..';

describe('file module', () => {

  it('should take return an error if file path does not exist', (done) => {

    reader('missing.bmp', (err, data) => {
      // console.log(err);
      expect(err).not.toBeUndefined();
      done();

    });
  });

  it('should take in a file and  return a string/buffer', (done) => {

    reader(`${root}/assets/bitmap.bmp`, (err, data) => {
      
      // console.log(err);
      expect(err).toBeNull;
      // console.log(data);
      // console.log(data[0]);
      // console.log(0x42);
      expect(data[0]).toBe(0x42);
      done();
    });


  });
}); 