const fs = require('fs');

function write(image, buffer, callback) {

  fs.writeFile(image, buffer, (err) => {
    if (err) { 
      callback(err); 
    } else {
      callback(undefined);
    }
  });

}

module.exports = write;
