const getPlayerChoice = prompt("Enter Rock, or Scissors");

const getComputerChoice = Math.floor(Math.random() * 3) + 1;
console.log(getComputerChoice);

if (getComputerChoice === 1){
    console.log('Rock');
} else if (getComputerChoice === 2) {
    console.log('Paper');
} else {
    console.log('Scissors');
}

const playerSelection = playerSelection.toUpperCase();

function playRound(playerSelection, computerSelection){

}

console.log(playRound(playerSelection, computerSelection));