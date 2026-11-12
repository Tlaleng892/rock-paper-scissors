let youScore = 0;
let computerScore = 0;

function play(you) {
  let choices = ["rock", "paper", "scissors"];
  let computer = choices[Math.floor(Math.random() * 3)];
  let message = "";

  if (you === computer) {
    message = "It's a tie! You both chose " + you;
  } else if (
    (you === "rock" && computer === "scissors") ||
    (you === "paper" && computer === "rock") ||
    (you === "scissors" && computer === "paper")
  ) {
    message = "You win! " + you + " beats " + computer;
    youScore++;
  } else {
    message = "You lose! " + computer + " beats " + you;
    computerScore++;
  }

  document.getElementById("result").textContent = message;
  document.getElementById("score").textContent = "You: " + youScore + " - Computer: " + computerScore;
}
