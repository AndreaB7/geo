// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 3: Arrive Steering Behavior

// A vehicle
var vehicle;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);

  // para integrarlo en web
  canvas.parent('animation2');

  // Create the vehicle
  vehicle = new Vehicle(320, 180);

}

function draw() {
  // al eliminar el background dibujo !!!!
  // background(51);

  // Arrive at the target
  var target = createVector(mouseX, mouseY);
  vehicle.arrive(target);

  // Update and display
  vehicle.update();
  vehicle.display();
}



