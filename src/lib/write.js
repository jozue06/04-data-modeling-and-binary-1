const fs = require('fs');

function write(image, buffer, callback) {

  fs.writeFile(image, buffer, (err) => {
    if (err) { 
      callback(err); 

      
    // }  else { 
    //   callback(null, data); 
    }
    console.log('The file has been saved');
  });



  //create that buffer into a constructor (13)
}

module.exports = write;
