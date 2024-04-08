/* Objective: To create a simple but functional Rock, Paper, Scissors game that 
randomly generates choices for two players and determines the winner based on traditional game rules.  
Key Components: 
`randomChoice` function to generate "rock", "paper", or "scissors"
`winner` function to compare choice and declare the winner

Function randomChoice 
    Generate a random number between 0 and 2
    if number is 0
        Return "rock"
    Else if number is 1
        Return "paper"
    Else 
        Return "scissors"

Function winner(player1, player2)
    If player1 choice is the same as player2
        Return "It's a tie"
    Else if player1 is "rock" and player2 is "scissors"
        Return "Player 1 Wins!"
    Else if player1 is "paper" and player2 is "rock"
        Return "Player 1 Wins!"
    Else if player1 is "scissors" and player2 is "paper"
        Return "Player 1 Wins!"
    Else
    Return "Player 2 Wins!"
*/

const prompt = require('prompt-sync')({sigint:true});

// Function to randomly select "rock", "paper", or "scissors" for the computer (Player 2)
function randomChoice() {
    const choice = Math.floor(Math.random() * 3); 
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to determine the winner of the game
function winner(player1, player2) {
    if (player1 === player2) {
        return "It's a tie";
    } else if ((player1 === "rock" && player2 === "scissors") ||
               (player1 === "paper" && player2 === "rock") ||
               (player1 === "scissors" && player2 === "paper")) {
        return "Player 1 Wins!";
    } else {
        return "Player 2 Wins!";
    }
}

// Main Game Function for Interactive Play
function playGame() {
    console.log("Welcome to the Rock, Paper, Scissors Game!");
    console.log("Enter 'rock', 'paper', or 'scissors' to play.");
    console.log("Type 'exit' to stop playing.");

    while (true) {
        let player1 = prompt("Your choice (rock/paper/scissors): ").toLowerCase();

        // Exit condition
        if (player1 === 'exit') {
            console.log("Thank you for playing!");
            break;
        }

        // Validation for player1's choice
        if (player1 !== "rock" && player1 !== "paper" && player1 !== "scissors") {
            console.log("Invalid choice, please enter 'rock', 'paper', or 'scissors'.");
            continue; // Skip the rest of the loop and prompt again
        }

        let player2 = randomChoice();
        
        console.log(`Player 1 chose ${player1}`);
        console.log(`Player 2 (Computer) chose ${player2}`);
        
        // Determine and display the winner
        let gameResult = winner(player1, player2);
        console.log(gameResult);
    }
}

// Run the interactive game
playGame();
