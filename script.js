"use strict";

let sec_number = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "Not a Number!";

    // When guess is too high
  } else if (guess > sec_number) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Too High!";
    } else {
      document.querySelector(".message").textContent = "You Lose!";
      document.querySelector(".score").textContent = 0;
    }

    // When guess is too low
  } else if (guess < sec_number) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Too Low!";
    } else {
      document.querySelector(".message").textContent = "You Lose!";
      document.querySelector(".score").textContent = 0;
    }

    // When guess is correct
  } else if (guess === sec_number) {
    document.querySelector(".message").textContent = "You Win 🏆";
    document.querySelector(".number").textContent = sec_number;
    document.querySelector("body").style.backgroundColor = "green";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});

// Reset the game
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  sec_number = Math.trunc(Math.random() * 20) + 1;

  // Restore game to initial state
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222"; // Default background color
});
