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

let docClicks = 0;

document.addEventListener("click", () => {
  docClicks += 1;
  if (docClicks == 1) {
    playAudio("intro-audio");
  }
});

function playAudio(audioId) {
  let audio = document.getElementById(audioId);
  audio.play();
}

function stopAudio(audioId) {
  let audio = document.getElementById(audioId);
  audio.pause();
  audio.currentTime = 0;
}

function goToHomeOptions(chosen_charcter) {
  document.getElementById("characters").style.display = "none";
  document.getElementById("houses").style.display = "block";
  stopAudio("intro-audio");
  document.removeEventListener("click", playAudio);
  playAudio("tic-tac-audio");
  document.querySelector("body").style.background =
    "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7))";
}

// for the timer
function startTimer() {
  min = 1;
  seconds = 0;
  flag = true;
  intervalID = setInterval(() => {
    if (seconds < 10) {
      document.getElementById("timer").innerHTML =
        "timer : 0" + min + ":0" + seconds + "";
    } else {
      document.getElementById("timer").innerHTML =
        "timer : 0" + min + ":" + seconds;
    }
    if (seconds == 0) {
      if (min == 0) {
        document.querySelector(".timer").style.backgroundColor = "red";
        clearInterval(intervalID);
      } else {
        min--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
  }, 1000);
}

//Back button to the doors options
var dest = "";
document.querySelector(".back-btn").addEventListener("click", () => {
  document.getElementById("home").style.display = "flex";
  document.getElementById(this.dest).style.display = "none";
  document.querySelector(".back-btn").href = "#home";
  document.querySelector(".back-btn").style.display = "none";
});

document.getElementById("boy-character").addEventListener("click", () => {
  startTimer();
  goToHomeOptions("tarry");
  document.getElementById("characters").style.display = "none";
  document.getElementById("houses").style.display = "block";
  document.querySelector(".character-selected").style.display = "block";
  document.querySelector(".mary-img").style.display = "none";
  document.querySelector(".character-name").innerHTML = "Tarry";
});
document.getElementById("girl-character").addEventListener("click", () => {
  startTimer();
  goToHomeOptions("mary");
  document.getElementById("characters").style.display = "none";
  document.getElementById("houses").style.display = "block";
  document.querySelector(".character-selected").style.display = "block";
  document.querySelector(".tarry-img").style.display = "none";
  document.querySelector(".character-name").innerHTML = "Mary";
});

//On start-btn click, go to the first step: Choose the character
document.querySelector(".start-btn").addEventListener("click", () => {
  document.querySelector(".timer").style.display = "flex";
  document.getElementById("intro-container").style.display = "none";
  document.getElementById("characters").style.display = "block";
});

//Going to the chosen house
document
  .querySelector(".house-option:nth-child(1) a")
  .addEventListener("click", () => {
    document.getElementById("houses").style.display = "none";
    document.getElementById("home").style.display = "flex";
  });

//Choosing the kitchen door
document
  .querySelector(".home-option:nth-child(1) a")
  .addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("kitchen").style.display = "flex";
    document.querySelector(".back-btn").style.display = "block";
    this.dest = "kitchen";
  });

//Choosing the Living room door
document
  .querySelector(".home-option:nth-child(2) a")
  .addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("living-room").style.display = "flex";
    document.querySelector(".back-btn").style.display = "block";
    this.dest = "living-room";
  });

//Choosing the bedroom door
document
  .querySelector(".home-option:nth-child(3) a")
  .addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("bedroom").style.display = "flex";
    document.querySelector(".back-btn").style.display = "block";
    this.dest = "bedroom";
  });
