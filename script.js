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

 const isWinner = () => {
   // Check if there is a winner and returns either true or false
   if(board[0] != "" && board[0] === board[1] && board[1] === board[2]){
     return true;
   }
   if(board[3] != "" && board[3] === board[4] && board[4] === board[5]){
     return true;
   }
   if(board[6] != "" && board[6] === board[7] && board[7] === board[8]){
     return true;
   }
   if(board[0] != "" && board[0] === board[3] && board[3] === board[6]){
     return true;
   }
   if(board[1] != "" && board[1] === board[4] && board[4] === board[7]){
     return true;
   }
   if(board[2] != "" && board[2] === board[5] && board[5] === board[8]){
     return true;
   }
   if(board[0] != "" && board[0] === board[4] && board[4] === board[8]){
     return true;
   }
   if(board[2] != "" && board[2] === board[4] && board[4] === board[6]){
     return true;
   }
 }

 const getCell = (cell) => {
   return board[cell];
 }

  return {generateBoard,attachCellListeners, markCell, getCell, isWinner};
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
    if(GameBoard.getCell(cell) != "X" && GameBoard.getCell(cell) != "O"){
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
    if (GameBoard.isWinner()) {
      console.log("Announcing winner");
      announceWinner(mark);
    }
    let newCellValue = GameBoard.getCell(cell);
    console.log("New cell value is now: " + newCellValue);
  }
  else{
    console.log("Please select an empty cell");
  }

  }

  const announceWinner = (mark) => {
    alert(mark + " won! Refresh to restart");
  }
  return{markCell, startGame};
})();

// BEGIN DisplayController for all display needs
const DisplayController = (() => {
  // Display controller needs to update value of a cell within the DOM
  const markCell = (cell, mark) => {
    $("#c"+cell).text(mark);}

  return {markCell};
})();

// BEGIN StartGame for starting the game
const StartGame = (() => {
  $("#start").click(function(){
    console.log("Starting Game");
    GameLogic.startGame();
  });
})();
