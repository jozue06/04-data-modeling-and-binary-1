const reader = require('../../src/lib/reader');
const fs = require('fs');
const write = require('../../src/lib/write');
const root = __dirname + '/../..';

describe('Write module', () => {

  it('should make a new bmp file', (done) => {

    reader(`${root}/assets/bitmap.bmp`, (err, data) => {
      
      expect(err).toBeNull;
      write(`${root}/assets/writeTest.bmp`, data, (err) =>  {
        expect(err).toBeUndefined;
        done();
      });

      fs.access(`${root}/assets/writeTest.bmp`, fs.constants.R_OK, (err) => {
        expect(err).toBeNull;
      });
    });
  });

  it('should throw an error if it cannot write a file to a given path', (done) => {

    reader(`${root}/assets/bitmap.bmp`, (err, data) => {
      
      expect(err).toBeNull;
      write(`${root}/assets/fakedir/failTest.bmp`, data , (err) =>  {
        expect(err).not.toBeUndefined();
        done();
      });

    });
  });

});