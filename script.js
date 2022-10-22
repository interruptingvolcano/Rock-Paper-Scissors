// This is the Rock, Paper, Scissors program

// create function called getComputerChoice that randomly returns 'Rock', 'Paper', or 'Scissors'

function getComputerChoice() {
  let compChoices = [];
  const choice1 = 'Rock';
  const choice2 = 'Paper';
  const choice3 = 'Scissors';
  compChoices.push(choice1, choice2, choice3);
  let randomCompChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
  return randomCompChoice;
  
}
console.log(getComputerChoice());

