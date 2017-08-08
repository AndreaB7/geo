
//======= variables iniciales ========//

var angle = 0.0;
var speed = 0.005;


// ======== 001: SETUP ========= // elementos del inicio : runs once

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);

  // para integrarlo en web
  canvas.parent('animation');
  noFill();
}

// ======== 002: DRAW ========= // los elementos que van a aparecer y su interacción : runs every time

function draw() {

  var l0 = map(mouseX, 0, width, 10, 200);
  var l1 = map(mouseY, 0, height, 10, 200);

  background(225,225,225);

  translate(width/2, height/2);
  rotate(angle);

   // Set colors
  // stroke(225, 255, 255, 250);

  for (var i=0; i<6; i++) {
    //push and pop are used together. Push stores the transformation settings // pop restores these settings
    // push and pop are used because inside the for loop there is a : rotation + translation
    // se usan para mantener la constante del círculo
    push();
    // create a full circle and divide it into 5 parts, where you put the i
    rotate(i*TWO_PI/6);
    // el movimiento de los círculos, del centro hasta el mouseX
    translate(0,l0);

    // ellipse inicial: central
    stroke(255, 153, 204, 300);
    ellipse(0, 0, 50, 3);

    rotate(angle);

      // líneas centrales
      for (var j=0; j<5; j++){
        push();
        rotate(j*TWO_PI/5);
        translate(0, l1);
        stroke(255, 153, 204, 300);
        ellipse(0, 0, 80, 5);
        rotate(angle);

        // circulos exteriores
        for (var k=0; k<5; k++){
          push();
          rotate(k*TWO_PI/5);
          translate(0, 33);
          stroke(215, 255, 255, 250);
          ellipse(0, 0, 70, 33);
          rotate(angle);

          pop();
        }
        pop();
      }
    pop();
  }

  angle -= speed;
}

