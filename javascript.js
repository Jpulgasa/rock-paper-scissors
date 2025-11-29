//Local variable declaration.
let humanScore = 0;
let computerScore = 0;

// Logic to get the computer choice.
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3) + 1;
  if (randomChoice === 1) {
    return "rock";
  } else if (randomChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

//Logic to get the Human Choice.
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");


btnRock.addEventListener("click", () => {
  humanChoice = "rock";
  playGame(humanChoice, getComputerChoice());
})
btnPaper.addEventListener("click", () => {
  humanChoice = "paper";
  playGame(humanChoice, getComputerChoice());
})
btnScissors.addEventListener("click", () => {
  humanChoice = "scissors";
  playGame(humanChoice, getComputerChoice());
})

//Logic to display results in div
const textContainer = document.querySelector("div")
const para = document.createElement("p");



//Logic to play the full game.
function playGame(humanChoice, computerChoice) {

  if (humanChoice === "rock" && computerChoice === "scissors") {
    textContainer.appendChild(para);
    para.textContent = `You win! Rock beats scissors. Human: ${
        humanScore + 1
      } Computer ${computerScore}`;
     humanScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    textContainer.appendChild(para);
    para.textContent = `You win! Scissors beats Paper. Human: ${humanScore + 1} Computer ${computerScore} `;
     humanScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    textContainer.appendChild(para);
    para.textContent = `You win! Paper beeats Rock. Human: ${humanScore + 1} Computer ${computerScore} `;
     humanScore += 1;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    textContainer.appendChild(para);
    para.textContent = `You lose! Rock beats scissors. Human: ${humanScore} Computer ${computerScore + 1} `;
     computerScore += 1;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    textContainer.appendChild(para);
    para.textContent = `You lose! Scissors beats paper.Human: ${humanScore} Computer ${computerScore + 1} `;
     computerScore += 1;
  } else if (computerChoice === humanChoice && humanChoice === computerChoice) {
    textContainer.appendChild(para);
    para.textContent = "It's a draw.";
    console.log("It's a draw." + computerChoice + computerChoice);
  } else {
    textContainer.appendChild(para);
    para.textContent = `You lose! Paper beats Rock. Human: ${humanScore} Computer ${computerScore + 1} `;
     computerScore += 1;
  }
  if (computerScore > 4) {
  alert("The computer is the winner! 🥇");
  textContainer.appendChild(para);
  para.textContent = `You lose! The computer won this time`;
  const buttons = document.querySelector(".btnChoice");
  buttons.style.display = 'none';
} else if (humanScore > 4) {
  alert("You are the winner! 🥇");
  textContainer.appendChild(para);
  para.textContent = `You won! Congratulations!`;
  btnRock.remove();
  btnPaper.remove();
  btnScissors.remove();
}
}


