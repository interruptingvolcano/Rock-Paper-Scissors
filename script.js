// Rock, Paper, Scissors

// create function to get a random choice by computer
  function getComputerChoice() {
    let compChoices = []; 
    const choice1 = 'ROCK'; 
    const choice2 = 'PAPER';
    const choice3 = 'SCISSORS';
    compChoices.push(choice1, choice2, choice3); 
    let computerSelection = compChoices[Math.floor(Math.random() * compChoices.length)]; 
    return computerSelection; 
}

// create function to compare player choice and computer    choice and to play one iteration of game
  function playGame(playerSelection, computerSelection) { 
   
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === "ROCK" && computerSelection === 'SCISSORS') {
    return 'Computer chose Scissors and you chose Rock. You win! Rock beats Scissors';

}   else if (playerSelection === "PAPER" & computerSelection === 'SCISSORS') {
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

//create function to iterate through 5 instances of the game
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
      }   else if (playGame(userChoice, computerChoice)
          .includes('lose')) {
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
    } else if (playerTally.length < computerTally.length) {   console.log('GAME OVER: YOU LOST.');
    } else if (playerTally.length === computerTally.length) {console.log('GAME OVER: It\'s a tie!');
    } 

    } 

  game();
  








