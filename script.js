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
        GameLogic.markCell(i);
      });
    }
  }

  return {generateBoard,attachCellListeners};
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

  const markCell = (cell) => {
    console.log("Marking cell: " + cell);
    let move = turn;
    if(turn == 0){
      player1.getMark();
      console.log("New cell value is now: " + player1.getMark());
      turn++;
    }
    else{
      player2.getMark();
      console.log("New cell value is now: " + player2.getMark());
      turn--;
    }
  }

  return{markCell};
})();

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
