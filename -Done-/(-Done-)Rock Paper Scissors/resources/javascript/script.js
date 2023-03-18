// Variables
const ComputerChoiceDisplay = document.getElementById("computerChoice")
const YourChoiceDisplay = document.getElementById("yourChoice")
const ResultDisplay = document.getElementById("result")
const Choices = document.querySelectorAll("button")
let YourChoice;
// ----------------------------------------------------------------

// User's Choice
Choices.forEach(choice => choice.addEventListener("click", (e) => {
    YourChoice = e.target.id
    YourChoiceDisplay.innerHTML = YourChoice
    RandomChoice()
    Result()
    Style()
}));
// ----------------------------------------------------------------

// Computer's Random Choice
function RandomChoice() {
    let RandomChoice = Math.floor(Math.random() * 3 + 1)
    if (RandomChoice == 1) { ComputerChoiceDisplay.innerHTML = "Rock" }
    if (RandomChoice == 2) { ComputerChoiceDisplay.innerHTML = "Paper" }
    if (RandomChoice == 3) { ComputerChoiceDisplay.innerHTML = "Scissors" }
};
// ----------------------------------------------------------------

// Result
function Result() {
    // tie
    if (ComputerChoiceDisplay.innerHTML == "Rock" && YourChoice == "Rock") { ResultDisplay.innerHTML = "Tie" }
    if (ComputerChoiceDisplay.innerHTML == "Paper" && YourChoice == "Paper") { ResultDisplay.innerHTML = "Tie" }
    if (ComputerChoiceDisplay.innerHTML == "Scissors" && YourChoice == "Scissors") { ResultDisplay.innerHTML = "Tie" };
    // -----
    // win
    if (ComputerChoiceDisplay.innerHTML == "Rock" && YourChoice == "Paper") { ResultDisplay.innerHTML = "YOU WIN!" }
    if (ComputerChoiceDisplay.innerHTML == "Paper" && YourChoice == "Scissors") { ResultDisplay.innerHTML = "YOU WIN!" }
    if (ComputerChoiceDisplay.innerHTML == "Scissors" && YourChoice == "Rock") { ResultDisplay.innerHTML = "YOU WIN!" };
    // -----
    // lose
    if (ComputerChoiceDisplay.innerHTML == "Rock" && YourChoice == "Scissors") { ResultDisplay.innerHTML = "you lost." }
    if (ComputerChoiceDisplay.innerHTML == "Paper" && YourChoice == "Rock") { ResultDisplay.innerHTML = "you lost." }
    if (ComputerChoiceDisplay.innerHTML == "Scissors" && YourChoice == "Paper") { ResultDisplay.innerHTML = "you lost." };
    // -----
};
// ----------------------------------------------------------------

// Style
function Style() {
    // tie -blue
    if (ResultDisplay.innerHTML == "Tie") { ResultDisplay.style.color = "var(--blue-3)" }
    // -----
    // win -green
    if (ResultDisplay.innerHTML == "YOU WIN!") { ResultDisplay.style.color = "var(--green-5)" }
    // -----
    // lose -red
    if (ResultDisplay.innerHTML == "you lost.") { ResultDisplay.style.color = "var(--red-5)" }
}