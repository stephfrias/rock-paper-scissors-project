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
