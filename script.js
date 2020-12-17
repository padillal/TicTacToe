//BEGIN GameBoard for all board related needs
const GameBoard = (() => {
  let board = [];
  //set board with no values in the cells
  const generateBoard = () => {
    for(let i = 0; i < 9; i++){
      board[i] = "";
    }
  }

 //listener for clicking a cell
  const attachCellListeners = () => {
    for(let i = 0; i < 9; i++ ){
      $("#c"+i).click(function() {
        console.log("You clicked on cell: " + i);
        console.log("Current cell value is: " + board[i]);
        GameLogic.markCell(i);
      });
    }
  }

 const markCell = (cell, mark) => {
     board[cell] = mark;
 }

 const getCell = (cell) => {
   return board[cell];
 }

  return {generateBoard,attachCellListeners, markCell, getCell};
})();

//BEGIN Player for player information
const Player = (name,mark) => {
  const getName = () => {
    return name;
  }
  const getMark = () => {
    return mark;
  }
  return{getName,getMark};
}

// BEGIN GameLogic for all game rules
const GameLogic = (() => {
  const player1 = Player("Player 1", "X");
  const player2 = Player("Player 2", "O");

  let turn = 0;

  const startGame = () => {
    GameBoard.generateBoard();
    GameBoard.attachCellListeners();
  }

  const markCell = (cell) => {
    console.log("Marking cell: " + cell);
    let mark = "";
    if(turn == 0){
      mark = player1.getMark();
      turn++;
    }
    else{
      mark = player2.getMark();
      turn--;
    }
    GameBoard.markCell(cell,mark);
    DisplayController.markCell(cell, mark);
    let newCellValue = GameBoard.getCell(cell);
    console.log("New cell value is now: " + newCellValue);
  }

  return{markCell, startGame};
})();

// BEGIN DisplayController for all display needs
const DisplayController = (() => {
  // Display controller needs to update value of a cell within the DOM
  const markCell = (cell, mark) => {
    $("#c"+cell).text(mark);
  }
  return {markCell};
})();

// BEGIN StartGame for starting the game
const StartGame = (() => {
  $("#start").click(function(){
    console.log("Starting Game");
    GameLogic.startGame();
  });
})();
