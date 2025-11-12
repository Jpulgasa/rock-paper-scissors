// Logic to get the computer choice.
let randomChoice = Math.floor(Math.random()*3)+1;
console.log(randomChoice);
function getComputerChoice(randomChoice) {
    if (randomChoice === 1) {
        return "rock";
    } else if (randomChoice === 2){
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice(randomChoice))