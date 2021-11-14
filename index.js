var hands = ["rock", "paper", "scissors"];
var randomNumber = Math.floor(Math.random() * 3);
var computerChoice = hands[randomNumber];
var ComputerScore = 0;
var PlayerScore = 0;
document.querySelector(".computer-score").innerHTML = ComputerScore;
document.querySelector(".player-score").innerHTML = PlayerScore;



console.log(computerChoice);

var rock = document.querySelector(".rock");

rock.addEventListener("click", function () {
  var playerChoice = "rock";
  if (computerChoice === playerChoice) {
    alert("It a tie");
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      alert("Your lose");
      ComputerScore++;
      document.querySelector(".computer-score").innerHTML = ComputerScore;
      document.querySelector(".computerHand").innerHTML = computerChoice;

    } else {
      alert("You win");
        PlayerScore++;
      document.querySelector(".player-score").innerHTML = PlayerScore;
      document.querySelector(".computerHand").innerHTML = computerChoice;

    }
  }
});

var paper = document.querySelector(".paper");

paper.addEventListener("click", function () {
  var playerChoice = "paper";
  if (computerChoice === playerChoice) {
    alert("It a tie");
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      alert("Your lose");
      ComputerScore++;
      document.querySelector(".computer-score").innerHTML = ComputerScore;
      document.querySelector(".computerHand").innerHTML = computerChoice;


    } else {
      alert("You win");
      PlayerScore++
      document.querySelector(".player-score").innerHTML = PlayerScore;
      document.querySelector(".computerHand").innerHTML = computerChoice;


    }
  }
});

var scissors = document.querySelector(".scissors");

scissors.addEventListener("click", function () {
  var playerChoice = "scissors";
  if (computerChoice === playerChoice) {
    alert("It a tie");
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      alert("Your lose");
      ComputerScore++;
      document.querySelector(".computer-score").innerHTML = ComputerScore;
      document.querySelector(".computerHand").innerHTML = computerChoice;


    } else {
      alert("You win");
      PlayerScore++;
      document.querySelector(".player-score").innerHTML = PlayerScore;
      document.querySelector(".computerHand").innerHTML = computerChoice;

    }
  }
});
