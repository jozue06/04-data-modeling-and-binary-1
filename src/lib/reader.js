'use strict';

const fs = require('fs');
module.exports = reader;

function reader(image, callback) {

  fs.readFile(image, (err, data) => {
    if (err) { 
      callback(err); 
    }  else { 
      callback(null, data); 
    }
  });

  

  //create that buffer into a constructor (13)
}

