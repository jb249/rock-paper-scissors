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

// const playerSelection = prompt("Rock, Paper, or Scissors?");
// const computerSelection = getComputerChoice(choices);
// console.log(playRound(playerSelection, computerSelection));

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        roundNumber = i + 1;
        const playerSelection = prompt("Round " + roundNumber + "\nYou: " + playerScore + " | Computer: " + computerScore + "\nRock, Paper, or Scissors?");
        const computerSelection = getComputerChoice(choices);
        result = playRound(playerSelection, computerSelection);
        if (result.search("win") > 0) {
            playerScore += 1;
        } else if (result.search("lose") > 0) {
            computerScore += 1;
        } else {
            playerScore += 0;
        }
        console.log(result);
    }
    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > playerScore) {
        console.log("Game Over! You lost this one.");
    } else {
        console.log("This game's a draw!");
    }
}

game();