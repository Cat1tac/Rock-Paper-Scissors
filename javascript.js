game();

function game() {
    var score = 0;
    for(let i = 0; i < 5; i++){
        const getPlayerChoice = prompt("Enter Rock, or Scissors");
        var playerSelection = getPlayerChoice.toLowerCase();
    
        const getComputerChoice = Math.floor(Math.random() * 3) + 1;
        var computerSelection = '';

        if (getComputerChoice === 1){
            computerSelection = 'Rock';
        } else if (getComputerChoice === 2) {
            computerSelection = 'Paper';
        } else {
            computerSelection = 'Scissors';
        }

        console.log(playRound(playerSelection, computerSelection, score));
    }

    if (score > 3){
        console.log('You Lose')
    } else {
        console.log('You Win!')
    }
}

function playRound(playerSelection, computerSelection, score){
    if (playerSelection == 'rock' && computerSelection == 'Scissors'){
        score = score + 1;
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection == 'rock' && computerSelection == 'Paper'){
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'Rock'){
        score = score + 1
        return 'You Win! Paper beats Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors'){
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper'){
        score = score + 1;
        return 'You Win! Scissors beats Paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'Rock'){
        return 'You Lose! Rock beats Scissors';
    } else {
        return 'Draw';
    }
}