'use strict';

const changeColors = {};


changeColors.invert = function(buffer) {

  let raster = buffer.raster;
  let colorTable = buffer.colorTable;
  if (buffer.numColors !== 0) {
    for (var i = 0; i < colorTable.length; i += 3) {
      colorTable[i] = 0xFF - colorTable[i];
      colorTable[i + 1] = 0xFF - colorTable[i + 1];
      colorTable[i + 2] = 0xFF - colorTable[i + 2];
    }
  } else {

    for (var j = 0; j < raster.length; j += 3) {
      raster[j] = 0xFF - raster[j];
      raster[j + 1] = 0xFF - raster[j + 1];
      raster[j + 2] = 0xFF - raster[j + 2];
    }
  }
  return(buffer);

};

changeColors.darken = function(buffer) {

  let raster = buffer.raster;
  let colorTable = buffer.colorTable;
  if (buffer.numColors !== 0) {
    for (var i = 0; i < colorTable.length; i += 3) {
      colorTable[i] = colorTable[i] / 2;
      colorTable[i + 1] = colorTable[i + 1] / 2;
      colorTable[i + 2] = colorTable[i + 2] / 2;
    }
  }
  else {
    for (var j = 0; j < raster.length; j += 3) {
      raster[j] = raster[j] / 2;
      raster[j + 1] = raster[j + 1] / 2;
      raster[j + 2] = raster[j + 2] / 2;
    }
  }
  return (buffer);

};

changeColors.lighten = function(buffer) {

  let raster = buffer.raster;
  let colorTable = buffer.colorTable;
  if (buffer.numColors !== 0) {
    for (var i = 0; i < colorTable.length; i += 3) {
      colorTable[i] = Math.min(255, colorTable[i] + 50);
      colorTable[i + 1] = Math.min(255, colorTable[i + 1] + 50);
      colorTable[i + 2] = Math.min(255, colorTable[i + 2] + 50);
    }
  } else {
    for (var j = 0; j < raster.length; j += 3) {
      raster[j] = Math.min(255, raster[j] + 50);
      raster[j + 1] = Math.min(255, raster[j + 1] + 50);
      raster[j + 2] = Math.min(255, raster[j + 2] + 50);
    }
  }
  return(buffer);

};

module.exports = changeColors;
