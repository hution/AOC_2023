const fs = require('fs');

fs.readFile("./Day2/data2.txt", 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  var redMax = 12;
  var greenMax = 13;
  var blueMax = 14;

  const lines = data.split('\n');
  lines.forEach((line) => {
    

    handsSplit = line.split(';');
    
    console.log(lineParts);
    //Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
    let numBlue = 0;
    let numGreen = 0;
    let numRed = 0;
    let gameID = 0;

 


  });
  


});