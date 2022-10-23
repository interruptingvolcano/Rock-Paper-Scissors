// This is the Rock, Paper, Scissors program

// create function called getComputerChoice that randomly returns 'Rock', 'Paper', or 'Scissors'. First, create an array, then create variables for each choice and put them in the array. Then find and return a random value from the array. Use .length to return a string value.

function getComputerChoice() {
  let compChoices = [];
  const choice1 = 'ROCK';
  const choice2 = 'PAPER';
  const choice3 = 'SCISSORS';
  compChoices.push(choice1, choice2, choice3);
  let computerSelection = compChoices[Math.floor(Math.random() * compChoices.length)];
  return computerSelection
}



// Take input/choice from user. Write a function called 'playGame' that plays a single round of Rock Paper Scissors. First, take user choice and compare with computer choice. Rock beats scissors, scissor beats paper, paper beats rock

// Remember to be careful not to call the function in different places


let playerSelection = prompt('Please enter your choice');
if (playerSelection !== null) {
  playGame(playerSelection, getComputerChoice() )
} else {
  alert('Refresh page!');
}

  function playGame(playerSelection, computerSelection) { 
   
  computerSelection = getComputerChoice();
  playerSelection = playerSelection.toUpperCase();

    if (playerSelection === "ROCK" && computerSelection === 'SCISSORS') {
    console.log('Computer chose Scissors and you chose Rock. You win! Rock beats Scissors');

}   else if (playerSelection === "PAPER" &&      computerSelection === 'SCISSORS') {
    console.log('Computer chose Scissors and you chose Paper. You lose! Scissors beats Paper');

}   else if (playerSelection === "SCISSORS" && computerSelection === 'ROCK') {
  console.log('Computer chose Rock and you chose Scissors. You lose! Rock beats Scissors');

}   else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
  console.log('Computer chose Paper and you chose Rock. You lose! Paper beats Rock');

}   else if (playerSelection === "PAPER" && computerSelection === 'ROCK') {
  console.log('Computer chose Rock and you chose Paper. You win! Paper beats Rock');

}   else if (playerSelection === "SCISSORS" &&    computerSelection === 'PAPER') {
  console.log('Computer chose Paper and you chose Scissors. You win! Scissors beats Paper');
  
}   else if (playerSelection === computerSelection) {
  console.log(`Computer chose ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} and you chose ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}. It\'s a tie!`);
} 

  else { 
    alert("Please enter a choice of 'Rock', 'Paper', or 'Scissors'");
}
   
}







 
 
 








