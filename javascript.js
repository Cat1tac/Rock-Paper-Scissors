let score = 0;

const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const container = document.querySelector('div');
let buttonClicks = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonClicks += 1;

        let playerSelection = button.textContent;
        const getComputerChoice = Math.floor(Math.random() * 3) + 1;
        let computerSelection = '';

        if (getComputerChoice === 1){
         computerSelection = 'Rock';
        } else if (getComputerChoice === 2) {
            computerSelection = 'Paper';
        } else {
            computerSelection = 'Scissors';
        }

        const result = document.createElement('p');
        result.textContent = playRound(playerSelection, computerSelection);
        container.appendChild(result);

        const trackScore = document.createElement('p')
        trackScore.textContent = `Score: ${score}`;
        container.appendChild(trackScore);

        body.appendChild(container);

        if (buttonClicks === 5){
            const showscore = document.createElement('p');
            showscore.textContent = core();
            container.appendChild(showscore);

            score = 0;
            buttonClicks = 0;
        }
    });
});



function core () {
    if (score < 3){
        return 'Computer Wins!'
    } else {
        return 'Player Wins!'
    }
    
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        score = score + 1;
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        score = score + 1
        return 'You Win! Paper beats Rock';
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
        score = score + 1;
        return 'You Win! Scissors beats Paper';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
        return 'You Lose! Rock beats Scissors';
    } else {
        return 'Draw';
    }
}