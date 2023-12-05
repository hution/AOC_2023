const fs = require('fs');

fs.readFile("./Day4/data.txt", 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  
  const lines = data.split('\n');
  var sumPoints = 0;
  var matchCount = 0;
  var points = 0;
  lines.forEach((line, index) => {
    winningNumbers = '';
    gameNumbers = '';
    points = 0;
    chars = line.split(' ');
    matchCount = 0;
    newChars = chars.map(item => item.trim()).filter(Boolean)
    winningNumbers = newChars.slice(2,12);
    gameNumbers = newChars.slice(13, 38);
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

    console.log(`Match Count: ${matchCount}`);
    for(var i=0;i<=matchCount-1;i++){
      if(i==0){
        points = 1;
      }
      else{
        points = points * 2;
      }
    }
    console.log(`Point Total: ${points}`)
    sumPoints += points;
  });
  console.log(`Final Points Total: ${sumPoints}`);
});

