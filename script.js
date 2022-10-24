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


// let playerSelection = prompt('Please enter your choice');
// if (playerSelection !== null) {
//   playGame(playerSelection, getComputerChoice() )
// } else {
//   alert('Refresh page!');
// }



  function playGame(playerSelection, computerSelection) { 
   
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === "ROCK" && computerSelection === 'SCISSORS') {
    return 'Computer chose Scissors and you chose Rock. You win! Rock beats Scissors';

}   else if (playerSelection === "PAPER" && computerSelection === 'SCISSORS') {
    return 'Computer chose Scissors and you chose Paper. You lose! Scissors beats Paper';

}   else if (playerSelection === "SCISSORS" && computerSelection === 'ROCK') {
    return 'Computer chose Rock and you chose Scissors. You lose! Rock beats Scissors';

}   else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    return 'Computer chose Paper and you chose Rock. You lose! Paper beats Rock';

}   else if (playerSelection === "PAPER" && computerSelection === 'ROCK') {
    return 'Computer chose Rock and you chose Paper. You win! Paper beats Rock';

}   else if (playerSelection === "SCISSORS" && computerSelection === 'PAPER') {
    return 'Computer chose Paper and you chose Scissors. You win! Scissors beats Paper';
  
}   else if (playerSelection === computerSelection) {
    return `Computer chose ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} and you chose ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}. It\'s a tie!`;
} 
}

  function game() {
    const gameArray = [];
    const playerTally = [];
    const computerTally = [];
    
    while (gameArray.length < 5) {
      let userChoice = (prompt('Enter a choice.'));
      let computerChoice = getComputerChoice();
     
      if (userChoice === null) {
        console.log(`You cancelled. Try again.`);
      } else if (userChoice.toUpperCase() !== 'ROCK' && userChoice.toUpperCase() !== 'PAPER' && userChoice.toUpperCase() !== 'SCISSORS') {
        console.log('Invalid choice. Try again.');
      } else {
        console.log(playGame(userChoice, computerChoice));
        gameArray.push(userChoice);
          if (playGame(userChoice, computerChoice).includes('win')) {
          playerTally.push(1);
      } else if (playGame(userChoice, computerChoice).     includes('lose')) {
        computerTally.push(1);
      }
      }
    } 

      if (playerTally.length === 1) {
      console.log(`You scored ${playerTally.length} point.`);
    } else {
      console.log(`You scored ${playerTally.length} points.`);
    }

      if (computerTally.length === 1) {
      console.log(`The computer scored ${computerTally.length} point.`);
    } else {
      console.log(`The computer scored ${computerTally.length} points.`);
    }
   
      if (playerTally.length > computerTally.length) {
      console.log('GAME OVER: YOU WON!');
    } else if (playerTally.length < computerTally.length) {
    console.log('GAME OVER: YOU LOST.');
    } else if (playerTally.length === computerTally.length) {console.log('GAME     OVER: It\'s a tie!');
    } 

    } 

  game();
  








