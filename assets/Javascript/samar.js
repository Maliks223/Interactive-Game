let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll(".text");
  if (n == slides.length) {
    document.querySelector(".start-btn").style.display = "block";
  }
  if (n > slides.length) {
    slideIndex = slides.length;
  }
  if (n < 1) {
    slideIndex = 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

let docClicks=0;

document.addEventListener("click", ()=>{
  docClicks+=1;
  if(docClicks==1){
  playAudio('intro-audio');
  }
});

function playAudio(audioId) {
  let audio = document.getElementById(audioId);
  audio.play();
}

function stopAudio(audioId){
  let audio=document.getElementById(audioId);
  audio.pause();
  audio.currentTime = 0;
}

function goToHomeOptions(chosen_charcter){
  document.getElementById("characters").style.display = "none";
  document.getElementById("houses").style.display = "block";
  stopAudio('intro-audio');
  document.removeEventListener("click", playAudio);
  playAudio('tic-tac-audio');
  document.querySelector('body').style.background = "none"
  document.querySelector('body').style.backgroundColor = "rgba(0,0,0,0.9)"
}

//On start-btn click, go to the first step: Choose the character
const startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", () => {
  document.getElementById("intro-container").style.display = "none";
  document.getElementById("characters").style.display = "block";
});

document.getElementById("boy-character").addEventListener("click", () => {
  goToHomeOptions("tarry");
});

document.getElementById("girl-character").addEventListener("click", () => {
  goToHomeOptions("mary");
});
