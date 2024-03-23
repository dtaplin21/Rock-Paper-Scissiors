const computerChoiceDisplay = document.getElementById('Computer-Choice');
const userChoiceDisplay = document.getElementById("User-Choice");
const result = document.getElementById("Result");

const possibleSolutions = document.querySelectorAll("button");
let userChoice;

possibleSolutions.forEach(possibleChoice => possibleSolutions.addEventListener('click', (e) => {
   userChoice =  e.target.id
   userChoiceDisplay.innerHTML = userChoice;
}))