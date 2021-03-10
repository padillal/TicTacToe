**Tic-Tac-Toe**

This is an application made utilizing Javascript to recreate the game of Tic-Tac-Toe. It is implemented with object oriented programming in mind by utilizing modules and factories for the functions to minimize the amount of global variables. [The current version can be found here](https://padillal.github.io/TicTacToe/)

***--Overview--***

The rules of Tic-Tac-Toe are simple:

 1. The  game  is played on a grid that's 3 squares by 3 squares.
 2. The first player is represented by the mark **X** and the second player is represented by the mark **O**
 3.  The first  player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
 4.  When all 9 squares are full, the game is automatically over.

***--Logic--***

This application uses Factories and Modules to perform the functions of the game. They are as follows

**GameBoard**: is responsible for initializing the board by creating an array of size 9 and adding empty cells within each grid element.

**Player** : is responsible for keeping track of the player information, including the player name and mark associated with that player.

**GameLogic**: is responsible for determining the order of the turns as well as checking to see if the move made is valid. A winner is also declared once 3 cells with the same mark are filled.

**DisplayController**: is responsible for providing a simple viewable interface to showcase the moves made on the grid as well as indicate which mark is currently in play.

**StartGame**: Is responsible for attaching the event listeners on the grid so moves can be made. The grid will not be responsive unless this button is pressed first.
