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
let humanChoice = null;
function getHumanChoice() {
  humanChoice = prompt("Choose rock, paper or scissors: ");
  let lowerCaseChoice = humanChoice.toLowerCase();
  return lowerCaseChoice;
}

//Logic to play the full game.
function playGame(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log(
      `You win! Rock beats scissors. Human: ${
        humanScore + 1
      } Computer ${computerScore}`
    );
    return (humanScore += 1);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log(
      `You win! Scissors beats Paper. Human: ${
        humanScore + 1
      } Computer ${computerScore} `
    );
    return (humanScore += 1);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(
      `You win! Paper beeats Rock. Human: ${
        humanScore + 1
      } Computer ${computerScore} `
    );
    return (humanScore += 1);
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log(
      `You lose! Rock beats scissors.Human: ${humanScore} Computer ${
        computerScore + 1
      } `
    );
    return (computerScore += 1);
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log(
      `You lose! Scissors beats paper.Human: ${humanScore} Computer ${
        computerScore + 1
      } `
    );
    return (computerScore += 1);
  } else if (computerChoice === humanChoice && humanChoice === computerChoice) {
    console.log("It's a draw." + computerChoice + computerChoice);
  } else {
    console.log(
      `You lose! Paper beats Rock. Human: ${humanScore} Computer ${
        computerScore + 1
      } `
    );
    return (computerScore += 1);
  }
}

for (let index = 1; index < 6; index++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playGame(humanSelection, computerSelection);
}

if (computerScore < humanScore) {
    console.log(`The human is the winner! Score: ${humanScore} : ${computerScore}`)
} else if (computerScore > humanScore) {
    console.log(`The computer is the winner! Score: ${computerScore} : ${humanScore}`)
} else {
    console.log(`It's a draw: ${computerScore} : ${humanScore}`)
}
