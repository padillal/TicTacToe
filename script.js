
// const moduleTemplate = (() => {
//   return {};
// })();
//
// const factoryTemplate = (param1, param2) => {
//   const func = () => TODO;
//   return {};
// };
const gameBoard = (() => {
  let board = [];

  const generateBoard = () => {
    for(let i = 0; i < 9; i++){
      board[i] = "";
    }
  }
  return {generateBoard};
})();



// creating a gameBoard using a module
// const GameBoard = (() => {
//   // board is created as an array
//   let board = [];
//   // generate board
//   const generateBoard = () => {
//     for(let i = 0; i < 9; i++){
//       board[i] = "";
//     }
//   }
//   // mark cells within board
//   const markCell = (cellID, symbol) => {
//     board[cellID] = symbol;
//     return true;
//   }
//
//   const resetBoard = () => {
//     for (let i = 0; i < 9; i++) {
//       //reset here
//       }
//   }
//
//   // board is returned
//   return{generateBoard, markCell};
// })();

// const GameLogic = ( () => {
//   // start game
//   const startGame = () => {
//     GameBoard.generateBoard();
//     DisplayController.attachEventListeners();
//   }
//
//   // Mark cell
//   const markCell = (i) => {
//   }
//
//
//   return {startGame, markCell};
// } )()
//
// // creating displayController using a module
// const DisplayController = (() => {
//   // Mark the following cell with the given marker
//   const markCell = (cellNum, marker) => {
//     // $("#"+cellNum).text(marker);
//   }
//   const attachEventListeners = () => {
//     for(let i = 0; i < 9; i++ ){
//       $("#"+i).click(function() {
//         GameLogic.markCell(i);
//       });
//     }
//   }
//   return {attachEventListeners, markCell};
// })();
//
// const Player = function(name, mark){
//   const getName = () => {
//     return name;
//   }
//   const getMark = () => {
//     return mark;
//   }
//
//   let score = 0;
//   const incScore = () => {
//     score += 1;
//   }
//   return {name, mark, incScore};
// }
//
// const AttachEventlisteners = (() => {
//   $("#start").click(function() {
//     GameLogic.startGame();
// })}
