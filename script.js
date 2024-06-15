function getComputerChoice() {
  let randomValue = Math.floor(Math.random() * 3);
  if (randomValue == 0) {
    return "rock";
  } else if (randomValue == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
function playRound(humanChoice, computerChoice) {
  if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
  } else if (
    humanChoice == computerChoice ||
    humanChoice == computerChoice ||
    humanChoice == computerChoice
  ) {
  } else {
    computerScore++;
  }
  updateScore();
}
function playGame() {
  let choices = document.querySelector("#choices");
  console.log(choices);
  let reset = document.querySelector("#reset");
  reset.addEventListener("click", restartGame);
  choices.addEventListener("click", (e) => {
    let humanChoice = e.target.id;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
}
function restartGame() {
  humanScore = 0;
  computerScore = 0;
  updateScore();
}
function updateScore() {
  let humanScoreElement = document.querySelector("#humanScore");
  let computerScoreElement = document.querySelector("#computerScore");
  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
}
let humanScore = 0,
  computerScore = 0;
playGame();
