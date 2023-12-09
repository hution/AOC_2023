const fs = require('fs');

fs.readFile("./Day3/data.txt", 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  
  function sumNumbersAdjacentToSymbols(data, symbols) {
    const rows = data.split('\n');
    let sum = 0;
    const visitedNumbers = new Set();
  
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < rows[i].length; j++) {
        const currentChar = rows[i][j];
  
        if (symbols.includes(currentChar) && !visitedNumbers.has(currentChar)) {
          // Check adjacent positions (up, down, left, right, diagonals)
          const adjacentPositions = [
            [i - 1, j], // Up
            [i + 1, j], // Down
            [i, j - 1], // Left
            [i, j + 1], // Right
            [i - 1, j - 1], // Diagonal Up-Left
            [i - 1, j + 1], // Diagonal Up-Right
            [i + 1, j - 1], // Diagonal Down-Left
            [i + 1, j + 1], // Diagonal Down-Right
          ];
  
          for (const [x, y] of adjacentPositions) {
            if (
              x >= 0 &&
              x < rows.length &&
              y >= 0 &&
              y < rows[i].length &&
              /\d/.test(rows[x][y])
            ) {
              // Extract the contiguous number and add it to the sum
              let contiguousNumber = '';
  
              // Go left to check for contiguous digits
              for (let k = y; k >= 0 && /\d/.test(rows[x][k]); k--) {
                contiguousNumber = rows[x][k] + contiguousNumber;
              }
  
              // Go right to check for contiguous digits
              for (let k = y + 1; k < rows[i].length && /\d/.test(rows[x][k]); k++) {
                contiguousNumber += rows[x][k];
              }
  
              if (!visitedNumbers.has(contiguousNumber)) {
                sum += parseInt(contiguousNumber, 10);
                visitedNumbers.add(contiguousNumber);
              }
            }
          }
        }
      }
    }
  
    return sum;
  }
    
  const symbolsToCheck = ['*', '#', '$', '+','/','@','=','%','-'];
  const totalSum = sumNumbersAdjacentToSymbols(data, symbolsToCheck);
  console.log(totalSum); // Sum of numbers adjacent to symbols
  
});

