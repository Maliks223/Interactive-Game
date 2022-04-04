let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  // console.log(n);
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

document.addEventListener("click", playAudio);

function playAudio() {
  let introAudio = document.getElementById("intro-audio");
  introAudio.play();
  document.removeEventListener("click", playAudio);
}

//On start-btn click, go to the first step: Choose the character
const startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", () => {
  document.getElementById("intro-container").style.display = "none";
  document.getElementById("characters").style.display = "block";
});

document.getElementById("boy-character").addEventListener("click", () => {
  document.getElementById("characters").style.display = "none";
  document.getElementById("houses").style.display = "block";
});
document.getElementById("girl-character").addEventListener("click", () => {
  document.getElementById("characters").style.display = "none";
  document.getElementById("houses").style.display = "block";
});
