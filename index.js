var hands = ["rock", "paper", "scissors"];
var randomNumber = Math.floor(Math.random() * 3);
var computerChoice = hands[randomNumber];
var ComputerScore = 0;
var PlayerScore = 0;
document.querySelector(".computer-score").innerHTML = ComputerScore;
document.querySelector(".player-score").innerHTML = PlayerScore;

function generate() {
  randomNumber = Math.floor(Math.random() * 3);
  computerChoice = hands[randomNumber];
}

console.log(computerChoice);

var rock = document.querySelector(".rock");

rock.addEventListener("click", function () {
  var playerChoice = "rock";
  if (computerChoice === playerChoice) {
    document.querySelector(".state").innerHTML = "It's a Tie! 😑";
    generate();
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      document.querySelector(".state").innerHTML = "You Lose! 😢";
      ComputerScore++;
      document.querySelector(".computer-score").innerHTML = ComputerScore;
      document.querySelector(".computerHand").innerHTML = computerChoice;
      generate();
    } else {
      document.querySelector(".state").innerHTML = "You Win! 🤩";
      PlayerScore++;
      document.querySelector(".player-score").innerHTML = PlayerScore;
      document.querySelector(".computerHand").innerHTML = computerChoice;
      generate();
    }
  }
});

var paper = document.querySelector(".paper");

paper.addEventListener("click", function () {
  var playerChoice = "paper";
  if (computerChoice === playerChoice) {
    document.querySelector(".state").innerHTML = "It's a Tie! 😑";

    generate();
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      document.querySelector(".state").innerHTML = "You Lose! 😢";

      ComputerScore++;
      document.querySelector(".computer-score").innerHTML = ComputerScore;
      document.querySelector(".computerHand").innerHTML = computerChoice;
      generate();
    } else {
      document.querySelector(".state").innerHTML = "You Win! 🤩";
      PlayerScore++;
      document.querySelector(".player-score").innerHTML = PlayerScore;
      document.querySelector(".computerHand").innerHTML = computerChoice;
      generate();
    }
  }
});

var scissors = document.querySelector(".scissors");

scissors.addEventListener("click", function () {
  var playerChoice = "scissors";
  if (computerChoice === playerChoice) {
    document.querySelector(".state").innerHTML = "It's a Tie! 😑";
    generate();
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      document.querySelector(".state").innerHTML = "You Lose! 😢";
      ComputerScore++;
      document.querySelector(".computer-score").innerHTML = ComputerScore;
      document.querySelector(".computerHand").innerHTML = computerChoice;
      generate();
    } else {
      document.querySelector(".state").innerHTML = "You Win! 🤩";
      PlayerScore++;
      document.querySelector(".player-score").innerHTML = PlayerScore;
      document.querySelector(".computerHand").innerHTML = computerChoice;
      generate();
    }
  }
});
