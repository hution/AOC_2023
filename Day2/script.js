const fs = require('fs');

fs.readFile("./Day2/data2.txt", 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  var redMax = 12;
  var greenMax = 13;
  var blueMax = 14;
  var cleanPulls = [];
  var numBlue = 0;
  var numGreen = 0;
  var numRed = 0;
  var gameID = 0;
  var sumGameID = 0;
  var winningHand = true;

  const lines = data.split('\n');
  lines.forEach((line) => {
    
      //Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green


    handsSplit = line.split(/:|;/);
    
    for(var i = 0; i<=handsSplit.length;i++){
      if(i==0){
        // console.log(`${handsSplit[0]}`);

      }
      else{
        pulls = handsSplit[i].split(' ');
        cleanPulls = pulls.map(item => item.trim().replace(/,/g, '')).filter(Boolean);
        gameIDSplit = handsSplit[0].split(' ');
        gameID= gameIDSplit[1];
      
      
        for(var j = 0;j<=cleanPulls.length;j++){
          if(j==1){
            if(cleanPulls[j]=='blue'){
              numBlue = cleanPulls[j-1];
            }else if(cleanPulls[j]=='green'){
              numGreen = cleanPulls[j-1];
            }else if(cleanPulls[j]=='red'){
              numRed=cleanPulls[j-1];
            }
          }
          if(j==3){
            if(cleanPulls[j]=='blue'){
              numBlue = cleanPulls[j-1];
            }else if(cleanPulls[j]=='green'){
              numGreen = cleanPulls[j-1];
            }else if(cleanPulls[j]=='red'){
              numRed=cleanPulls[j-1];
            }
          }
          if(j==5){
            if(cleanPulls[j]=='blue'){
              numBlue = cleanPulls[j-1];
            }else if(cleanPulls[j]=='green'){
              numGreen = cleanPulls[j-1];
            }else if(cleanPulls[j]=='red'){
              numRed=cleanPulls[j-1];
            }
          }
        }
      }
      if(numRed <= redMax && numBlue <= blueMax && numGreen <= greenMax){
      }
      else{
        winningHand = false;
        break;
      }
      
      
      
    }
    if(winningHand == true){

      sumGameID += Number(gameID);
    }
    else{
      winningHand = true;
    }
    console.log(`Reds: ${numRed}. Green: ${numGreen}. Blue: ${numBlue}.`)
    
    
    
    
  });
  
  console.log(sumGameID);
  
  

});