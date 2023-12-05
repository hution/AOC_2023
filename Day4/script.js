const fs = require('fs');

fs.readFile("./Day4/data2.txt", 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  
  const lines = data.split('\n');
  var sumPoints = 0;
  lines.forEach((line, index) => {
    winningNumbers = '';
    gameNumbers = '';
    matchCount = 0;
    points = 0;
    chars = line.split(' ');
    newChars = chars.map(item => item.trim()).filter(Boolean)
    winningNumbers = newChars.slice(2,7);
    gameNumbers = newChars.slice(8,16);
    // console.log(winningNumbers);
    // console.log(gameNumbers);
    
    winningNumbers.forEach((winNum) => {
      gameNumbers.forEach((gameNum)=>{
        if(winNum == gameNum){
          console.log(`Match! ${winNum} and ${gameNum}`);
          matchCount +=1;
        }
        
      });
      
    });

    console.log(`Match Count: ${matchCount}`)
    for(i=0;i==matchCount;i++){
      if(i==1){
        points = 1;
      }
      else{
        points = points * 2;
      }
    }
    console.log(`Point Total: ${points}`)
  });

});

