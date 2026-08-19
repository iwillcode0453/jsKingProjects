let hands = ["rock", "paper", "scissors"];
// let handsDisplay = document.getElementById("showHands");
// let handsContainer = document.getElementById("showHandsButton");
// let winnerContainer = document.getElementById("showWinner");
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const handsDisplay = document.getElementById("showHands");
const winnerContainer = document.getElementById("showWinner");
const resetButton = document.getElementById("resetButton");

// function userChoice() {
// 	let userInput = prompt(`Choose you hand: `);
// 	let cleanInput = userInput ? userInput.toLowerCase().trim() : "";

	// Check if the user choice is with in the hands variable
	// if (!hands.includes(cleanInput)) {
		// Display an error on the webpage
// 		winnerContainer.textContent = "Invalid choice! Please type rock, paper or scissors"
// 		return null; // Return null to signal an invalid move
// 	}
// 	return cleanInput;
// }

function computerChoice() {
	let randomIndex = Math.floor(Math.random() * hands.length);
	return hands[randomIndex];
}

function determineWinner(parameter1) {
	// let parameter1 = userChoice();

	// If the user enter an invalid choice, exit early w/out running the game logic
	// if (!parameter1) {
	// 	handsDisplay.textContent = "";
	// 	return;
	// }

	let computer = computerChoice();
	handsDisplay.textContent = `You chose ${parameter1} vs Computer chose ${computer}`;

	// if (parameter1 !== "rock" && parameter1 !== "paper" && parameter1 !== "scissors") {
	// 	winnerContainer.textContent = "Please type a valid hand choice: rock, paper, and scissors";
	// }

	if (parameter1 === computer) {
		winnerContainer.textContent = "It's a tie!";
	} else if (
		(computer === "rock" && parameter1 === "scissors") ||
		(computer === "scissors" && parameter1 === "paper") ||
		(computer === "paper" && parameter1 === "rock")
	) {
		winnerContainer.textContent = "Computer wins!";
	} else {
		winnerContainer.textContent = "You win!";
	}
}

function resetGame () {
	handsDisplay.textContent = "";
	winnerContainer.textContent = "";
}
