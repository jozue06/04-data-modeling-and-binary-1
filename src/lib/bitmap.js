'use strict';

const FILE_SIZE_OFFSET = 2;
const WIDTH_OFFSET = 18;
const HEIGHT_OFFSET = 20;
const NUM_COLORS_OFFSET = 46;
const COLOR_TABLE_OFFSET = 54;
const BYTES_PER_PIXEL_OFFSET = 28;


class CleanBuffer {

  constructor(data) {
    this.type = data.toString('utf-8', 0, 2);
    this.fileSize = data.readInt32LE(FILE_SIZE_OFFSET);
    this.bytesPerPixel = data.readInt16LE(BYTES_PER_PIXEL_OFFSET);
    this.height = data.readInt32LE(HEIGHT_OFFSET);
    this.width = data.readInt32LE(WIDTH_OFFSET);
    this.numColors = data.readInt32LE(NUM_COLORS_OFFSET);
    this.colorTable = data.slice(COLOR_TABLE_OFFSET, this.numColors * 4);
  }
  
  
}


module.exports = CleanBuffer;