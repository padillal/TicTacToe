//BEGIN GameBoard for all board related needs
const GameBoard = (() => {
  let board = [];
  //set board with no values in the cells
  const generateBoard = () => {
    for(let i = 0; i < 9; i++){
      board[i] = "";
    }
  }

  // const markCell = () => {
  // }

 //listener for clicking a cell
  const attachCellListeners = () => {
    for(let i = 0; i < 9; i++ ){
      $("#c"+i).click(function() {
        console.log("You clicked on cell: " + i);
        console.log("Current cell value is: " + board[i]);
      });
    }
  }

  return {generateBoard,attachCellListeners};
})();

// BEGIN GameLogic for all game rules
// const GameLogic = (() => {})();

// BEGIN DisplayController for all display needs
const DisplayController = (() => {
  const startGame = () => {
    GameBoard.generateBoard();
    GameBoard.attachCellListeners();
  }
  return {startGame};
})();

// BEGIN StartGame for starting the game
const StartGame = (() => {
  $("#start").click(function(){
    console.log("Starting Game");
    DisplayController.startGame();
  });
})();
