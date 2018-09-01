const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for(let rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
    let row = [];
    for(let colNumber = 0; colNumber < numberOfColumns; colNumber++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for(let rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
    let row = [];
    for(let colNumber = 0; colNumber < numberOfColumns; colNumber++) {
      row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;
  while(numberOfBombsPlaced <= numberOfBombs) {
    //do not allow bombs to be placed on top of existing bomb
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = "B";
    numberOfBombsPlaced++;
  }

  return board;
};

const printBoard = board => {
  console.log((board.map(row => row.join(' | '))).join('\n'));
}

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log("Player Board: ");
printBoard(playerBoard);
console.log("Bomb Board: ");
printBoard(bombBoard);
