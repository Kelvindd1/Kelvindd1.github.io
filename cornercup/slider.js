const slides = document.getElementsByClassName("slide");
const thumbs = document.getElementsByClassName("thumb");
const counter = document.getElementById("counter");
const playBtn = document.getElementById("playBtn");

let slideIndex = 0;
let timer = null;
let playing = true;

function showSlide(n) {
  // Wrap around so "next" on the last slide goes to the first, and "prev" on the first goes to the last
  if (n >= slides.length) {
    n = 0;
  }
  if (n < 0) {
    n = slides.length - 1;
  }
  slideIndex = n;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    thumbs[i].classList.remove("active");
  }

  slides[slideIndex].style.display = "block";
  thumbs[slideIndex].classList.add("active");
  counter.textContent = (slideIndex + 1) + " / " + slides.length;
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

// A manual click restarts the countdown so the slide doesn't change right after the user picks it
function restartTimer() {
  clearInterval(timer);
  if (playing) {
    timer = setInterval(nextSlide, 4000);
  }
}

function changeSlide(step) {
  showSlide(slideIndex + step);
  restartTimer();
}

function togglePlay() {
  playing = !playing;
  playBtn.textContent = playing ? "Pause" : "Play";
  restartTimer();
}

document.getElementById("prevBtn").addEventListener("click", function () {
  changeSlide(-1);
});

document.getElementById("nextBtn").addEventListener("click", function () {
  changeSlide(1);
});

for (let i = 0; i < thumbs.length; i++) {
  thumbs[i].addEventListener("click", function () {
    showSlide(i);
    restartTimer();
  });
}

playBtn.addEventListener("click", togglePlay);

showSlide(slideIndex);
restartTimer();
