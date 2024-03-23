const computerChoiceDisplay = document.getElementById('Computer-Choice');
const userChoiceDisplay = document.getElementById("User-Choice");
const result = document.getElementById("Result");
const possibleSolutions = document.querySelectorAll("button");
let userChoice

possibleSolutions.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice =  e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)
}