let choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice(choices) {
    randomNumber = Math.floor(Math.random() * (choices.length));
    // console.log(randomNumber);
    computerChoice = choices[randomNumber];
    // console.log(computerChoice);
    return computerChoice;
}