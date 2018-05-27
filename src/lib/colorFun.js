'use strict';

function colorFun(buffer) {

    let colorTable = buffer.colorTable;
//   buffer [] = '0x';
//   buffer[] = '0x';

for(var i=0;i < colorTable.length;i++){
    colorTable[i]=0x0;
    
}

return(buffer);
  

  
}

module.exports = colorFun;