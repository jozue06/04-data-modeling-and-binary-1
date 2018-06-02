'use strict';

const getArgs = require('../../index.js');
let root = __dirname + '../../';

describe('index module', () => {

  it('should throw an error if given files are not bmp', (done) => {

    expect(getArgs(root + 'assets/fake.jpg', 'assets/newFile.bmp', 'invert')).toBe('error');

    done();

  });

  it('should throw an error if given files are not bmp', (done) => {

    expect(getArgs(`${root}/bitmap.bmp`, `${root}/newfile.jpg`, 'invert')).toBe('error');

    done();

  });

  it('should return undefined when successful', (done) => {
    expect(getArgs(`${root}/bitmap.bmp`, `${root}newFile.bmp`, 'invert')).toBeUndefined();

    done();

  });

  it('should return undefined if file is readable', (done) => {

    let actual = getArgs(`${root}/bitmap.bmp`, `${root}newFile.bmp`, 'invert');

    setTimeout(function () {
      expect(actual).toBeUndefined();
      done();
    }, 200);
  });

  


});