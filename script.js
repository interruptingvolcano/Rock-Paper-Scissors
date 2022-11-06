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
  

if (gameArray.length === 5) {
    gameOver();
    rBtn.removeEventListener('click', playRock);
    pBtn.removeEventListener('click', playPaper);
    sBtn.removeEventListener('click', playScissors);

    return;
  }
else if (gameArray.length < 5 && gameArray.length !== 4) {
   

  let computerChoice = getComputerChoice();
  const para = document.querySelector('p');
  para.textContent += `${(playGame('rock', computerChoice))}\r\n`;

  
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


  gameArray.push(1);
  return e;

} else if (gameArray.length < 5 && gameArray. length === 4) {
  let computerChoice = getComputerChoice();
  const para = document.querySelector('p');
  para.textContent += `${(playGame('rock', computerChoice))}\r\n`;

  sBtn.removeEventListener('click', playScissors);
  rBtn.removeEventListener('click', playRock);
  pBtn.removeEventListener('click', playPaper);
  gameOver();

}

}

rBtn.addEventListener('click', playRock);


// Function when Paper is clicked
function playPaper(e) {
  
  if (gameArray.length === 5) {
    gameOver();
    pBtn.removeEventListener('click', playPaper);
    rBtn.removeEventListener('click', playRock);
    sBtn.removeEventListener('click', playScissors);

    return;
  }
else if (gameArray.length < 5 && gameArray.length !== 4) {
   
  let computerChoice = getComputerChoice();
  const para = document.querySelector('p');
  para.textContent += `${(playGame('paper', computerChoice))}\r\n`;
  
    
      if (playGame('paper', computerChoice).includes('win')) {
      playerTally.push(1);
      } else if (playGame('paper', computerChoice).includes('lose')) {
      computerTally.push(1);
      } else if (playGame('paper', computerChoice).includes('tie')) {
      tieTally.push(1);
      }
  
if (gameArray.length === 5) {
  sBtn.removeEventListener('click', playScissors);
  rBtn.removeEventListener('click', playRock);
  pBtn.removeEventListener('click', playPaper);
  gameOver();
  }

    
  const playerScore = document.querySelector('#playerScore');
  playerScore.textContent = `${playerTally.length}`;

  const computerScore = document.querySelector('#computerScore');
  computerScore.textContent = `${computerTally.length}`;
  
  gameArray.push(1);
  return e;

} else if (gameArray.length < 5 && gameArray. length === 4) {
  let computerChoice = getComputerChoice();
  const para = document.querySelector('p');
  para.textContent += `${(playGame('paper', computerChoice))}\r\n`;

  sBtn.removeEventListener('click', playScissors);
  rBtn.removeEventListener('click', playRock);
  pBtn.removeEventListener('click', playPaper);
  gameOver();

}
}

pBtn.addEventListener('click', playPaper);


// Function when Scissors is clicked
function playScissors(e) {
  
  if (gameArray.length === 5) {
    gameOver();
    sBtn.removeEventListener('click', playScissors);
    rBtn.removeEventListener('click', playRock);
    pBtn.removeEventListener('click', playPaper);

    return;
  }
else if (gameArray.length < 5 && gameArray.length !== 4) {
  
  let computerChoice = getComputerChoice();
  const para = document.querySelector('p');
  para.textContent += `${(playGame('scissors', computerChoice))}\r\n`;
  
    if (playGame('scissors', computerChoice).includes('win')) {
    playerTally.push(1);
    } else if (playGame('scissors', computerChoice).includes('lose')) {
    computerTally.push(1);
    } else if (playGame('scissors', computerChoice).includes('tie')) {
    tieTally.push(1);
    } 
  
if (gameArray.length === 5) {
    sBtn.removeEventListener('click', playScissors);
    rBtn.removeEventListener('click', playRock);
    pBtn.removeEventListener('click', playPaper);
    gameOver();
  }
  
  const playerScore = document.querySelector('#playerScore');
  playerScore.textContent = `${playerTally.length}`;

  const computerScore = document.querySelector('#computerScore');
  computerScore.textContent = `${computerTally.length}`;
  gameArray.push(1);
  return e;

} else if (gameArray.length < 5 && gameArray. length === 4) {
  let computerChoice = getComputerChoice();
  const para = document.querySelector('p');
  para.textContent += `${(playGame('scissors', computerChoice))}\r\n`;
  
  sBtn.removeEventListener('click', playScissors);
  rBtn.removeEventListener('click', playRock);
  pBtn.removeEventListener('click', playPaper);
  gameOver();

}

}

sBtn.addEventListener('click', playScissors);


function gameOver() {
  const over = document.querySelector('.over');
  const para = document.createElement('p');
  over.appendChild(para);
  if (playerTally.length > computerTally.length) {
    para.innerText = 'Game Over\r\n';
    para.innerText = 'YOU WIN!!!';
  } else if (computerTally.length > playerTally.length) {
    para.innerText = 'Game Over\r\n';
    para.innerText = 'YOU LOSE!!'
  } else if (playerTally.length === computerTally.length) {
    para.innerText = 'Game Over\r\n';
    para.innerText = 'TIE GAME - PLAY AGAIN';
  }

}











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
  







