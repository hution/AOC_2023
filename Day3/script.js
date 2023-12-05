const fs = require('fs');

fs.readFile("./Day3/data2.txt", 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  
  const lines = data.split('\n');
  var sumNum = 0;
  lines.forEach((line, index) => {
    chars = line.split('');
    let numSolution= "";
    let firstNum = "";
    let lastNum = "";
   
    chars.forEach((item,charIndex) => {
      if(!isNaN(parseInt(item)) && isFinite(item)==true){
        
        if(firstNum == ""){
          firstNum=item;
        }
        else if(firstNum!="" && lastNum==""){
          lastNum = item;
        }
        else if(firstNum!="" && lastNum !=""){
          lastNum=item;
        }

      }
      if(lastNum==""){
        lastNum=firstNum;
      }
    });
    numSolution = firstNum.concat(lastNum);
    console.log(numSolution);
    sumNum += Number(numSolution);
  });
  console.log(sumNum)
});

