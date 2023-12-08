const fs = require('fs');

fs.readFile("./Day7/data.txt", 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  
  const lines = data.split('\n');
  lines.forEach((line, index) => {
    });
  
});

