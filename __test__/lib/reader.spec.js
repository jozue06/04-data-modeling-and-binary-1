'use strict';

const reader = require('../../src/lib/reader');
const root = __dirname + '/../..';

describe('file module', () => {

  it('should take return an error if file path does not exist', (done) => {

    reader('missing.bmp', (err) => {
      expect(err).not.toBeUndefined();
      done();

    });
  });

  it('should take in a file and return a string/buffer', (done) => {

    reader(`${root}/assets/bitmap.bmp`, (err, data) => {
      
      expect(err).toBeNull;
      expect(data[0]).toBe(0x42);
      done();
    });


  });
}); 