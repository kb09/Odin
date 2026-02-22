function Player(name, marker){
  this.name = name;
  this.marker = marker;
}

const player1 = new Player("Steve", "X");

const player2 = new Player("Also Steve", "Y")


Object.getPrototypeOf(player1) === Player.prototype;
Object.getPrototypeOf(player2) === Player.prototype;

// console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype);
// console.log(player1.valueOf());