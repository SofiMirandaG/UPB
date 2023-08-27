// Comandos librería Swiler

document.addEventListener("DOMContentLoaded", function () {
  // Optional parameters
  const swiper = new Swiper(".swiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
});

// Comandos librería Tone
// Declarar una variable para el reproductor de audio
let player;

// Esperar a que se cargue todo el contenido de la página
document.addEventListener("DOMContentLoaded", function () {
  // Crear el reproductor de audio y cargar un archivo de audio
  player = new Tone.Player(
    "https://res.cloudinary.com/dddzn7afc/video/upload/v1690061609/audio_relax_cectlr.mp3"
  ).toDestination();
  player.start();
});

//Controlar el volumen del audio con el input range
const volumeControl = document.getElementById("volume");
volumeControl.addEventListener("input", function () {
  const volumeValue = parseFloat(volumeControl.value);
  player.volume.value = volumeValue;
});

// Control reproducción

const playButton = document.getElementById("play");
playButton.addEventListener("click", function () {
  player.start();
});
