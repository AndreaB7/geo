
// SETUP GAME: limpio
function Game() {
  this.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  this.isFull = false;
  this.generateGrid(3, 3);

}

// Prototypes to inputs to the game
// HTML
Game.prototype.generateGrid = function(numberRow, numberColumn){
    console.log("I am in a grid");
    for (row = 0; row < numberRow; row++) {
      for (column = 0; column < numberColumn; column++){
        $('#game').append($('<div>')
                  .attr('data-row', row)
                  .attr('data-col', column)
                  .addClass('cell'));
        console.log("This is a cell");
      }
    }
      this.clickCell();
};

Game.prototype.clickCell = function(){
  console.log("This is a click");

  var row;
  var col;

  // turno para definir los jugadores
  var turn = 1;
  // definimos una variable parar
  var value;

  $(".cell").click(function(){
    //if user 1 + declarar user 1 y user 2
    // HTML

    if (turn === 1){
      value = "d";
      $(this).text("d")
      turn = 2;
    } else if (turn === 2){
      $(this).text("i");
      value = "i";
      turn = 3;
    } else if (turn === 3){
      $(this).text("v");
      value = "v";
      turn = 1;
    }

    $(this).addClass('cellX')
    // JS tracks position cells HTML
      row = $(this).attr('data-row')
        console.log(row);
      col = $(this).attr('data-col')
        console.log(col);

    game.board[row][col] = value;
      console.log (game.board);
      game.detectFullBoard();
      game.extractRandomTiles();
      console.log("isFull ?" , game.isFull)
  });
}

Game.prototype.detectFullBoard = function(){
  this.isFull = true;
  for(var i = 0; i <= this.board.length; i++){
    for (var j = 0; j<= this.board[i].length; j++) {
      if(this.board[i][j] === null){
        this.isFull = false
      }
    }
  }
}


// INICIALIZACIÓN DEL GAME
// DOCUMENT READY

var game;

$(document).ready(function() {
  $("#game").addClass("fadeIn");

  setTimeout(function(){
    $("#game").show()
    game = new Game();
  }, 150)
});
