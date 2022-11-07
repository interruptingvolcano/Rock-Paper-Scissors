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
    return 'Computer chose Scissors and you chose Rock.\r\n Rock beats Scissors.\r\n You win!';

}   else if (playerSelection === "PAPER" & computerSelection === 'SCISSORS') {
    return 'Computer chose Scissors and you chose Paper.\r\n Scissors beats Paper.\r\n You lose.';

}   else if (playerSelection === "SCISSORS" && computerSelection === 'ROCK') {
    return 'Computer chose Rock and you chose Scissors.\r\n Rock beats Scissors.\r\n You lose this one.';

}   else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    return 'Computer chose Paper and you chose Rock.\r\n Paper beats Rock.\r\n Sorry, you lose.';

}   else if (playerSelection === "PAPER" && computerSelection === 'ROCK') {
    return 'Computer chose Rock and you chose Paper.\r\n Paper beats Rock.\r\n You win, good job!';

}   else if (playerSelection === "SCISSORS" && computerSelection === 'PAPER') {
    return 'Computer chose Paper and you chose Scissors.\r\n Scissors beats Paper.\r\n You win this one!';
  
}   else if (playerSelection === computerSelection) {
    return `Computer chose ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} and you chose ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}.\r\n Tie!`;
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
let tieTally = [];

const bottom = document.querySelector('.bottom');

const gameTally = document.createElement('p');
gameTally.classList.add('.gmTally');
bottom.appendChild(gameTally);


// Function when Rock is clicked
function playRock(e) {


if (gameArray.length < 5 && gameArray.length !== 4) {
   
  let computerChoice = getComputerChoice();
  const para = document.querySelector('p');
  para.textContent = `${(playGame('rock', computerChoice))}\r\n`;

    if (playGame('rock', computerChoice).includes('win')) {
    playerTally.push(1);
    } else if (playGame('rock', computerChoice).includes('lose')) {
    computerTally.push(1);
    } else if (playGame('rock', computerChoice).includes('tie')) {
    tieTally.push(1);
    } 
  
  const playerScore = document.querySelector('#playerScore');
  playerScore.textContent = `Your Score:  ${playerTally.length}`;
  const computerScore = document.querySelector('#computerScore');
  computerScore.textContent = `Computer's Score: ${computerTally.length}`;

  gameArray.push(1);
  gameTally.textContent = `Game Count: ${gameArray.length}`
  
  return e;

} else if (gameArray.length < 5 && gameArray. length === 4) {
  
  let computerChoice = getComputerChoice();
  const para = document.querySelector('p');
  para.textContent = `${(playGame('rock', computerChoice))}\r\n`;

  if (playGame('rock', computerChoice).includes('win')) {
    playerTally.push(1);
    } else if (playGame('rock', computerChoice).includes('lose')) {
    computerTally.push(1);
    } else if (playGame('rock', computerChoice).includes('tie')) {
    tieTally.push(1);
    } 

    const playerScore = document.querySelector('#playerScore');
    playerScore.textContent = `Your Score:  ${playerTally.length}`;
    const computerScore = document.querySelector('#computerScore');
    computerScore.textContent = `Computer's Score: ${computerTally.length}`;

  sBtn.removeEventListener('click', playScissors);
  rBtn.removeEventListener('click', playRock);
  pBtn.removeEventListener('click', playPaper);
  gameOver();

  gameArray.push(1);
  gameTally.textContent = `Game Count: ${gameArray.length}`
  

}

}
rBtn.addEventListener('click', playRock);


// Function when Paper is clicked
function playPaper(e) {
  
if (gameArray.length < 5 && gameArray.length !== 4) {
   
  let computerChoice = getComputerChoice();
  const para = document.querySelector('p');
  para.textContent = `${(playGame('paper', computerChoice))}\r\n`;
  
    
      if (playGame('paper', computerChoice).includes('win')) {
      playerTally.push(1);
      } else if (playGame('paper', computerChoice).includes('lose')) {
      computerTally.push(1);
      } else if (playGame('paper', computerChoice).includes('tie')) {
      tieTally.push(1);
      }
   
  const playerScore = document.querySelector('#playerScore');
  playerScore.textContent = `Your Score:  ${playerTally.length}`;

  const computerScore = document.querySelector('#computerScore');
  computerScore.textContent = `Computer's Score: ${computerTally.length}`;
  
  gameArray.push(1);
  gameTally.textContent = `Game Count: ${gameArray.length}`
  return e;

} else if (gameArray.length < 5 && gameArray. length === 4) {
  let computerChoice = getComputerChoice();
  const para = document.querySelector('p');
  para.textContent = `${(playGame('paper', computerChoice))}\r\n`;

  if (playGame('paper', computerChoice).includes('win')) {
    playerTally.push(1);
    } else if (playGame('paper', computerChoice).includes('lose')) {
    computerTally.push(1);
    } else if (playGame('paper', computerChoice).includes('tie')) {
    tieTally.push(1);
    }

    const playerScore = document.querySelector('#playerScore');
    playerScore.textContent = `Your Score:  ${playerTally.length}`;
  
    const computerScore = document.querySelector('#computerScore');
    computerScore.textContent = `Computer's Score: ${computerTally.length}`;

  sBtn.removeEventListener('click', playScissors);
  rBtn.removeEventListener('click', playRock);
  pBtn.removeEventListener('click', playPaper);
  gameOver();

  gameArray.push(1);
  gameTally.textContent = `Game Count: ${gameArray.length}`

}
}
pBtn.addEventListener('click', playPaper);


// Function when Scissors is clicked
function playScissors(e) {
  
if (gameArray.length < 5 && gameArray.length !== 4) {
  
  let computerChoice = getComputerChoice();
  const para = document.querySelector('p');
  para.textContent = `${(playGame('scissors', computerChoice))}\r\n`;
  
    if (playGame('scissors', computerChoice).includes('win')) {
    playerTally.push(1);
    } else if (playGame('scissors', computerChoice).includes('lose')) {
    computerTally.push(1);
    } else if (playGame('scissors', computerChoice).includes('tie')) {
    tieTally.push(1);
    } 
  
  const playerScore = document.querySelector('#playerScore');
  playerScore.textContent = `Your Score:  ${playerTally.length}`;

  const computerScore = document.querySelector('#computerScore');
  computerScore.textContent = `Computer's Score: ${computerTally.length}`;
  gameArray.push(1);
  gameTally.textContent = `Game Count: ${gameArray.length}`
  return e;

} else if (gameArray.length < 5 && gameArray. length === 4) {
  let computerChoice = getComputerChoice();
  const para = document.querySelector('p');
  para.textContent = `${(playGame('scissors', computerChoice))}\r\n`;

  if (playGame('scissors', computerChoice).includes('win')) {
    playerTally.push(1);
    } else if (playGame('scissors', computerChoice).includes('lose')) {
    computerTally.push(1);
    } else if (playGame('scissors', computerChoice).includes('tie')) {
    tieTally.push(1);
    } 

    const playerScore = document.querySelector('#playerScore');
    playerScore.textContent = `Your Score:  ${playerTally.length}`;
  
    const computerScore = document.querySelector('#computerScore');
    computerScore.textContent = `Computer's Score: ${computerTally.length}`;

  sBtn.removeEventListener('click', playScissors);
  rBtn.removeEventListener('click', playRock);
  pBtn.removeEventListener('click', playPaper);
  gameOver();

  gameArray.push(1);
  gameTally.textContent = `Game Count: ${gameArray.length}`

}
}
sBtn.addEventListener('click', playScissors);


function gameOver() {
  const over = document.querySelector('.over');
  const para = document.createElement('p');
  para.classList.add('final');
  over.appendChild(para);
  if (playerTally.length > computerTally.length) {
    para.innerText = 'Game Over  -  YOU WIN!';
  } else if (computerTally.length > playerTally.length) {
    para.innerText = 'Game Over  -  COMPUTER WINS!'
  } else if (playerTally.length === computerTally.length) {
    para.innerText = 'Game Over  -  It\'s a tie!';
  }
}

const startOver = document.querySelector('.startOver');
startOver.addEventListener('click', () => {
  window.location.reload();
})

gameTally.textContent = `Game Count: 0`













