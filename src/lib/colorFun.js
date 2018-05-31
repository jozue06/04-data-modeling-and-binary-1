'use strict';

const changeColors = {};

changeColors.colorFun = function(buffer) {

  let colorTable = buffer.colorTable;   

  for (var i = 0; i < colorTable.length; i++) {
    // colorTable[i] = 0x0;
    // colorTable[i] = colorTable[i]*2;

  }

  return (buffer);


};

changeColors.invert = function(buffer) {

  let raster = buffer.raster;

  for (var i = 0; i < raster.length; i+=3) {
    raster[i] = 0xFF - raster[i];
    raster[i+1] = 0xFF - raster[i+1];
    raster[i+2] = 0xFF - raster[i+2];
  }
  return(buffer);

};

changeColors.darken = function(buffer) {

  let raster = buffer.raster;

  for (var i = 0; i < raster.length; i+=3) {
    raster[i] = raster[i]/4;
    raster[i+1] = raster[i+1]/4;
    raster[i+2] = raster[i+2]/4;
  }
  return(buffer);

};

changeColors.lighten = function(buffer) {

  let raster = buffer.raster;

  for (var i = 0; i < raster.length; i+=3) {
    raster[i] = Math.min(255,raster[i]+50);
    raster[i+1] = Math.min(255,raster[i+1]+50);
    raster[i+2] = Math.min(255,raster[i+2]+50);
  }
  return(buffer);

};

module.exports = changeColors;
