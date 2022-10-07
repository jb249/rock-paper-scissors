let choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice(choices) {
    randomNumber = Math.floor(Math.random() * (choices.length));
    // console.log(randomNumber);
    computerChoice = choices[randomNumber];
    // console.log(computerChoice);
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    cs = computerSelection;
    ps = playerSelection[0].toUpperCase() + playerSelection.substring(1,playerSelection.length + 1).toLowerCase();
    if (cs === ps) {
        return "It's a draw! You both chose " + cs + ".";
    } else if (ps === "Rock" && cs === "Scissors") {
        return "You win! " + ps + " beats " + cs + ".";
    } else if (ps === "Paper" && cs === "Rock") {
        return "You win! " + ps + " beats " + cs + ".";
    } else if (ps === "Scissors" && cs === "Paper") {
        return "You win! " + ps + " beats " + cs + ".";
    } else {
        return "You lose! " + cs + " beats " + ps + ".";
    }
}

const playerSelection = prompt("Rock, Paper, or Scissors?");
const computerSelection = getComputerChoice(choices);
console.log(playRound(playerSelection, computerSelection));