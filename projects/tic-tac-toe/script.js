//  1. store the gameboard as an array inside of a Gameboard object,
// 2.  players are also going to be stored in objects
// 3. want an object to control the flow of the game itself.

const Gameboard = function(){
  var board=[" ", " ", " ", " ", " ", " ", " ", " ", " "]
  return{ board: board};
}

var myGame = Gameboard();
console.log(myGame.board);