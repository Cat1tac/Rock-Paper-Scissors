const getComputerChoice = Math.floor(Math.random() * 3) + 1;
console.log(getComputerChoice);

if (getComputerChoice === 1){
    console.log('Rock');
} else if (getComputerChoice === 2) {
    console.log('Paper');
} else {
    console.log('Scissors');
}
