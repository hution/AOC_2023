const fs = require('fs');

fs.readFile("./Day8/data2.txt", 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  
  const lines = data.split('\n');
  var directions = [];
  var dirLength = 0;
  
  lines.forEach((line, index) => {
    if(index==0){
      directions = line.split('');
      dirLength = directions.length;
    }
    
    // AAA = (BBB, CCC)
    

    });
  
});

