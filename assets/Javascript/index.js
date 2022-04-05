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
  intervalID = setInterval(() => {
    if (document.querySelector(".trap").style.display == "flex") {
      clearInterval(intervalID);
    }
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
        document.querySelector(".game-over").style.display = "flex";
        document.querySelector(".try-again-btn").style.display = "block";
        stopAudio("tic-tac-audio");
        document.removeEventListener("click", playAudio);
        playAudio("game-over-audio");
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
  document.getElementById(dest).style.display =
    document.querySelector(".back-btn").style.display =
    document.querySelector(".empty-selection").style.display =
      "none";
  document.querySelector(".back-btn").href = "#home";
});

//Selecting a character
document.getElementById("boy-character").addEventListener("click", () => {
  startTimer();
  goToHomeOptions("tarry");
  document.getElementById("characters").style.display = document.querySelector(
    ".mary-img"
  ).style.display = "none";
  document.getElementById("houses").style.display = document.querySelector(
    ".character-selected"
  ).style.display = "block";
  document.querySelector(".character-name").innerHTML = "Tarry";
});
document.getElementById("girl-character").addEventListener("click", () => {
  startTimer();
  goToHomeOptions("mary");
  document.getElementById("characters").style.display = document.querySelector(
    ".tarry-img"
  ).style.display = "none";
  document.getElementById("houses").style.display = document.querySelector(
    ".character-selected"
  ).style.display = "block";
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

//Putting traps to the sofa, bed, and refrigerator
function trapSelected() {
  document.querySelector(".trap").style.display = "flex";
  document.querySelector(".try-again-btn").style.display = "block";
  document.querySelector(".back-btn").style.display = "none";
  stopAudio("tic-tac-audio");
  document.removeEventListener("click", playAudio);
  playAudio("boom-audio");
}

document.getElementById("living-room-sofa").addEventListener("click", () => {
  trapSelected();
});
document.getElementById("bedroom-bed").addEventListener("click", () => {
  trapSelected();
});
document
  .getElementById("kitchen-refrigerator")
  .addEventListener("click", () => {
    trapSelected();
  });

//For those which doesn't contain the key
document
  .getElementById("living-room-bookshelf")
  .addEventListener("click", () => {
    document.querySelector(".empty-selection").style.display = "flex";
  });

document.getElementById("living-room-table").addEventListener("click", () => {
  document.querySelector(".empty-selection").style.display = "flex";
});

document.getElementById("bedroom-closet").addEventListener("click", () => {
  document.querySelector(".congrats").style.display = "flex";
  document.querySelector(".try-again-btn").style.display = "block";
  stopAudio("tic-tac-audio");
  document.removeEventListener("click", playAudio);
  playAudio("winning-audio");
  clearInterval(intervalID);
});

document
  .getElementById("bedroom-dressing-table")
  .addEventListener("click", () => {
    document.querySelector(".empty-selection").style.display = "flex";
  });

document.getElementById("kitchen-dishwasher").addEventListener("click", () => {
  document.querySelector(".empty-selection").style.display = "flex";
});

document.getElementById("kitchen-cupboards").addEventListener("click", () => {
  document.querySelector(".empty-selection").style.display = "flex";
});
