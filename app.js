const computerChoiceDisplay = document.getElementById('Computer-Choice');
const userChoiceDisplay = document.getElementById("User-Choice");
const resultDisplay = document.getElementById("Result");
const possibleSolutions = document.querySelectorAll("button");
let userChoice
let computerChoice;
let result;

possibleSolutions.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice =  e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
        computerChoice = "Rock"
    }
    if (randomNumber === 2) {
        computerChoice = "paper"
    }
    if (randomNumber === 3) {
        computerChoice = "Scissors"
    }
    computerChoiceDisplay.innerHTML = computerChoice
};

function getResult() {
    if(computerChoice === userChoice) {
        result = "It's a tie!"
    }
    if(computerChoice === "Rock" && userChoice === "Paper") {
        result = "you win!"
    }
    if(computerChoice === "Rock" && userChoice === "Scissors") {
        result = "you Lost!"
    }
    if(computerChoice === "Paper" && userChoice === "Scissors") {
        result = "you win!"
    }
    if(computerChoice === "Paper" && userChoice === "Rock") {
        result = "you Lost!"
    }
    if(computerChoice === "Scissors" && userChoice === "Rock") {
        result = "you win!"
    }
    if(computerChoice === "Scissors" && userChoice === "Paper") {
        result = "you Lost!"
    }
    resultDisplay.innerHTML = result
} 