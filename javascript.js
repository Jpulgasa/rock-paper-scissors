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
console.log(getComputerChoice(randomChoice));

//Logic to get the Human Choice.
let humanChoice = null;
function getHumanChoice () {
    humanChoice = prompt("Choose rock, paper or scissors: ");
    return(humanChoice)
}
console.log(getHumanChoice());
