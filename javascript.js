// Logic to get the computer choice.
let randomChoice = Math.floor(Math.random()*3)+1;
function getComputerChoice(randomChoice) {
    if (randomChoice === 1) {
        return "rock";
    } else if (randomChoice === 2){
        return "paper";
    } else {
        return "scissors";
    }
}

//Logic to get the Human Choice.
let humanChoice = null;
function getHumanChoice () {
    humanChoice = prompt("Choose rock, paper or scissors: ");
    let lowerCaseChoice = humanChoice.toLowerCase();
    return(lowerCaseChoice);
}

//Players score variables declaration.
let humanScore = 0;
let computerScore = 0;

//Logic to play a single round.
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore+=1;
        return console.log("You win! Rock beats scissors.");
    } else if (humanChoice === "scissors" && computerChoice ===     "paper") {
        humanScore+=1;
        return console.log("You win! Scissors beats Paper.");
    } else if (humanChoice === "paper" && computerChoice ===     "rock") {
        humanScore+=1;
        return console.log("You win! Paper beeats Rock.");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore+=1;
        return console.log("You lose! Rock beats scissors.");
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore+=1;
        return console.log("You lose! Scissors beats paper.");
    } else if (computerChoice === humanChoice && humanChoice === computerChoice) {
        computerScore+=1;
        return console.log("It's a draw." + computerChoice + computerChoice);
    } else {
        computerScore+=1;
        return console.log("You lose! Paper beats Rock.");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(humanSelection);
console.log(computerSelection);