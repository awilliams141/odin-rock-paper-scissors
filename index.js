function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;

    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    
    
    //console.log("Make your choice! Rock, Paper, or scissors?");
    //playerSelection = prompt();

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper covers rock!";
        } else if (computerSelection === "scissors") {
            return "You win! Rock crushes scissosrs!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors cuts paper!";
        } else if (computerSelection === "rock") {
            return "You win! Paper covers rock!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock crushes scissors!";
        } else if (computerSelection === "paper") {
            return "You win! Scissors cuts paper!";
        }
    }
    return "It's a tie! You both chose the same!"
}

