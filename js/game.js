
// SETUP GAME
function Game() {

  // El valor dentro de generateGrid corresponde al número de rows
  // el valor equivale a numberRow
  var tetractys = this.generateGrid(4);
}

//Prototypes to inputs to the game
//HTML

Game.prototype.generateGrid = function(numberRow){
    console.log("I am in a grid");

    // generas dos for para obtener una matrix
    // 1 columna para que haya un div separado por cell
    var totalColumns = 1;
    var out = '';

    for (row = 0; row < numberRow; row++) {
      out += `<div class="row">`;
      for (column = 0; column < totalColumns; column++) {
        // inicializar el game e incluir divs en los rows y columns

        // template string: te permite de usar multi-line string
        // the $ is used to specify placeholders
        out += `<div data-row="${row}" data-col="${column}" class="cell"><span class='triangle-content'></span></div>`;
      }
      out += "</div>";
      // vamos sumando cada vez que se crea un nuevo row una cell más . Si quiero añadir cada vez que haya un nuevo row, 5 cells, lo único que tengo que hacer es poner totalColumns+5
      totalColumns++;
    }
    $('#game').append(out);
      this.clickCell();
};


var counter = 0;

Game.prototype.clickCell = function(){
  console.log("This is a click");


  var row;
  var col;
  var turn = 1;
  var value;

  $(".cell").click(function(){

    // el contador nos permite contar hasta 10 clicks
    // los if encadenados están por orden, quiere decir que se pueden ejecutar varios if.

    // si el contador llega a 10, remove the classes and generate a new triangle (poner los valores a 0)
    if (counter === 10) {
      $('.cell').children().text('');
      $('.cell').removeClass('ten-selected');
      counter = 0;
      return;
    }

    // si se clica en una cell y hay contenido ( < 1), súmale una al contador
    if($(this).children().text().length < 1) {
      counter++
    }

    // si el contador llega a 10 añade las clase : seleccionado
    if (counter === 10) {
      $('.cell').addClass('ten-selected');
    }

    // Τετρακτινο
    if (turn === 1){
      value = "τ";
      $(this).children().text("τ")
      turn = 2;
    } else if (turn === 2){
      $(this).children().text("ε");
      value = "ε";
      turn = 3;
    } else if (turn === 3){
      $(this).children().text("τ");
      value = "τ";
      turn = 4;
    } else if (turn === 4){
       $(this).children().text("ρ");
      value = "ρ";
      turn = 5;
    } else if (turn === 5){
      $(this).children().text("α");
      value = "α";
      turn = 6;
    } else if (turn === 6){
      $(this).children().text("κ");
      value = "κ";
      turn = 7;
    } else if (turn === 7){
      $(this).children().text("τ");
      value = "τ";
      turn = 8;
    } else if (turn === 8){
      $(this).children().text("ι");
      value = "ι";
      turn = 9;
    } else if (turn === 9){
      $(this).children().text("ν");
      value = "ν";
      turn = 10;
    } else if (turn === 10){
      $(this).children().text("o");
      value = "o";
      turn = 1;
    }

    $(this).addClass('cellX')
    // JS tracks position cells HTML
      row = $(this).attr('data-row')
        console.log(row);
      col = $(this).attr('data-col')
        console.log(col);
  });
}



// INICIALIZACIÓN DEL GAME
// DOCUMENT READY

var game;

$(document).ready(function() {
  $(".title").addClass("fade-in");

  $("#game").addClass("fade-in");
  game = new Game();

});
