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

  const lines = data.split('\n');
  lines.forEach((line) => {
    
      //Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green


    handsSplit = line.split(/:|;/);
    
    for(var i = 0; i<=handsSplit.length-1;i++){
      if(i==0){
        console.log(`${handsSplit[0]}`);
      }
      else{
        pulls = handsSplit[i].split(' ');
        cleanPulls = pulls.map(item => item.trim().replace(/,/g, '')).filter(Boolean);
        
        console.log(cleanPulls);

      }

      
      if(i==1){
        if(cleanPulls[i]=='blue'){
          numBlue = cleanPulls[i-1];
        }else if(cleanPulls[i]=='green'){
          numBlue = cleanPulls[i-1];
        }else if(cleanPulls[i]=='red'){
          numRed=cleanPulls[i-1];
        }
      }
      if(i==3){
        if(cleanPulls[i]=='blue'){
          numBlue = cleanPulls[i-1];
        }else if(cleanPulls[i]=='green'){
          numBlue = cleanPulls[i-1];
        }else if(cleanPulls[i]=='red'){
          numRed=cleanPulls[i-1];
        }
      }
      if(i==5){
        if(cleanPulls[i]=='blue'){
          numBlue = cleanPulls[i-1];
        }else if(cleanPulls[i]=='green'){
          numBlue = cleanPulls[i-1];
        
        }else if(cleanPulls[i]=='red'){
          numRed=cleanPulls[i-1];
        
        }
      }
      
      console.log(`Reds: ${numRed}. Green: ${numGreen}. Blue: ${numBlue}.`)
    }


 


  });
  


});