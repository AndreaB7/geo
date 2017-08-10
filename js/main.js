// INICIALIZACIÓN SONIDO
var audio = $("#mySoundClip")[0];
$("#circle, #circlehome").mouseenter(function() {
  audio.play();
});


// INICIALIZACIÓN ANIMACIÓN
$(document).ready(function() {
  $("#animation").addClass("fade-in");
});

// INICIALIZACIÓN ANIMACIÓN 2
$(document).ready(function() {
  $("#animation2").addClass("fade-in");
});


// // INICIALIZACIÓN INDEX
// $(document).ready(function() {
//   $(".buttons").addClass("fade-in");
// });

