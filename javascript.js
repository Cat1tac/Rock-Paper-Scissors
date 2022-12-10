const getPlayerChoice = prompt("Enter Rock, or Scissors");

const getComputerChoice = Math.floor(Math.random() * 3) + 1;
console.log(getComputerChoice);
var computerSelection = '';

if (getComputerChoice === 1){
    computerSelection = 'Rock';
} else if (getComputerChoice === 2) {
    computerSelection = 'Paper';
} else {
    computerSelection = 'Scissors';
}

const playerSelection = getPlayerChoice.toLowerCase();

function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'Scissors'){
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection == 'rock' && computerSelection == 'Paper'){
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'Rock'){
        return 'You Win! Paper beats Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors'){
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper'){
        return 'You Win! Scissors beats Paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'Rock'){
        return 'You Lose! Rock beats Scissors';
    } else {
        return 'Draw';
    }
}

console.log(playRound(playerSelection, computerSelection));