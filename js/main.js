
$(document).ready(function() {

  // INICIALIZACIÓN SONIDO
  var audio = $("#mySoundClip")[0];
  $("#circle, #circlehome").mouseenter(function() {
    audio.play();
  });


  // INICIALIZACIÓN animaciones
  $("#animation").addClass("fade-in");
  $("#animation2").addClass("fade-in");
  $("#animation3").addClass("fade-in");
  $("#intro").addClass("fade-out");


  $("#block1").addClass("fade-in");
  $("#block2").addClass("fade-in");
});

