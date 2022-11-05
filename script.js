// ROCK, PAPER, SCISSORS

// COMPUTER CHOICE -- create function to get a random choice by computer
  function getComputerChoice() {
    let compChoices = ['ROCK', 'PAPER', 'SCISSORS']; 
    let computerSelection = compChoices[Math.floor(Math.random() * compChoices.length)]; 
    return computerSelection; 
}

// COMPARE PLAYER CHOICE AND COMPUTER CHOICE: ONE ITERATION -- create function to compare player choice and computer    choice and to play one iteration of game
  function playGame(playerSelection, computerSelection) { 
   
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === "ROCK" && computerSelection === 'SCISSORS') {
    return 'Computer chose Scissors and you chose Rock. You win! Rock beats Scissors.';

}   else if (playerSelection === "PAPER" & computerSelection === 'SCISSORS') {
    return 'Computer chose Scissors and you chose Paper. You lose! Scissors beats Paper.';

}   else if (playerSelection === "SCISSORS" && computerSelection === 'ROCK') {
    return 'Computer chose Rock and you chose Scissors. You lose! Rock beats Scissors.';

}   else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    return 'Computer chose Paper and you chose Rock. You lose! Paper beats Rock.';

}   else if (playerSelection === "PAPER" && computerSelection === 'ROCK') {
    return 'Computer chose Rock and you chose Paper. You win! Paper beats Rock.';

}   else if (playerSelection === "SCISSORS" && computerSelection === 'PAPER') {
    return 'Computer chose Paper and you chose Scissors. You win! Scissors beats Paper.';
  
}   else if (playerSelection === computerSelection) {
    return `Computer chose ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} and you chose ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}. It\'s a tie!`;
} 
}


// Select buttons to listen
const rBtn = document.querySelector('.rock');
const pBtn = document.querySelector('.paper');
const sBtn = document.querySelector('.scissors');

// Create arrays to store tallies
let gameArray = []; 
let playerTally = []; 
let computerTally = [];
let tieTally = []

// Function when Rock is clicked
function playRock(e) {
  let computerChoice = getComputerChoice();
  const para = document.querySelector('p');
  para.textContent += `${(playGame('rock', computerChoice))}\r\n`;
  gameArray.push(1);

  
    if (playGame('rock', computerChoice).includes('win')) {
    playerTally.push(1);
    } else if (playGame('rock', computerChoice).includes('lose')) {
    computerTally.push(1);
    } else if (playGame('rock', computerChoice).includes('tie')) {
    tieTally.push(1);
    }
    
  const playerScore = document.querySelector('#playerScore');
  playerScore.textContent = `${playerTally.length}`;

  const computerScore = document.querySelector('#computerScore');
  computerScore.textContent = `${computerTally.length}`;
  
  return e;
}

rBtn.addEventListener('click', playRock);


// Function when Paper is clicked
function playPaper(e) {
  let computerChoice = getComputerChoice();
  const para = document.querySelector('p');
  para.textContent += `${(playGame('paper', computerChoice))}\r\n`;
  gameArray.push(1);
    
      if (playGame('paper', computerChoice).includes('win')) {
      playerTally.push(1);
      } else if (playGame('paper', computerChoice).includes('lose')) {
      computerTally.push(1);
      } else if (playGame('paper', computerChoice).includes('tie')) {
      tieTally.push(1);
      }
     
  const playerScore = document.querySelector('#playerScore');
  playerScore.textContent = `${playerTally.length}`;

  const computerScore = document.querySelector('#computerScore');
  computerScore.textContent = `${computerTally.length}`;

  return e;
}

pBtn.addEventListener('click', playPaper);


// Function when Scissors is clicked
function playScissors(e) {
  let computerChoice = getComputerChoice();
  const para = document.querySelector('p');
  para.textContent += `${(playGame('scissors', computerChoice))}\r\n`;
  gameArray.push(1);
  
    if (playGame('scissors', computerChoice).includes('win')) {
    playerTally.push(1);
    } else if (playGame('scissors', computerChoice).includes('lose')) {
    computerTally.push(1);
    } else if (playGame('scissors', computerChoice).includes('tie')) {
    tieTally.push(1);
    }
  
  const playerScore = document.querySelector('#playerScore');
  playerScore.textContent = `${playerTally.length}`;

  const computerScore = document.querySelector('#computerScore');
  computerScore.textContent = `${computerTally.length}`;
    
  return e;
}
sBtn.addEventListener('click', playScissors);











// PLAY 5 ITERATIONS OF GAME -- create function to iterate through 5 instances of the game
  // function game() {
  //   const gameArray = []; 
  //   const playerTally = []; 
  //   const computerTally = []; 
    
  //   while (gameArray.length < 5) { 
  //     let userChoice = (prompt('Enter a choice.'));
  //     let computerChoice = getComputerChoice();
     
  //     if (userChoice === null) {
  //       console.log(`You cancelled. Try again.`);
  //     } else if (userChoice.toUpperCase() !== 'ROCK' && userChoice.toUpperCase() !== 'PAPER' && userChoice.toUpperCase() !== 'SCISSORS') {
  //       console.log('Invalid choice. Try again.');
  //     } else {
  //         console.log(playGame(userChoice, computerChoice));
  //         gameArray.push(userChoice);
  //         if (playGame(userChoice, computerChoice).includes('win')) {
  //         playerTally.push(1);
  //     }   else if (playGame(userChoice, computerChoice)
  //         .includes('lose')) {
  //         computerTally.push(1);
  //     }
  //     }
  //   } 
  //   //this block just makes printed result grammatically correct
  //     if (playerTally.length === 1) {
  //     console.log(`You scored ${playerTally.length} point.`);
  //   } else {
  //     console.log(`You scored ${playerTally.length} points.`);
  //   }
  //   //this block just makes printed result grammatically correct
  //     if (computerTally.length === 1) {
  //     console.log(`The computer scored ${computerTally.length} point.`);
  //   } else {
  //     console.log(`The computer scored ${computerTally.length} points.`);
  //   }

  //     if (playerTally.length > computerTally.length) {
  //     console.log('GAME OVER: YOU WON!');
  //   } else if (playerTally.length < computerTally.length) {
  //     console.log('GAME OVER: YOU LOST.');
  //   } else if (playerTally.length === computerTally.length) {
  //     console.log('GAME OVER: It\'s a tie!');
  //   } 

  //   } 

  // game();
  








