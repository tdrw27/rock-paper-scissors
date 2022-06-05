function computerPlay() {
 x = Math.floor(Math.random() * 10);
  console.log(x);
  if (x <= 3) {
    return 'Rock'.toLowerCase();
  } else if (x <= 6) {
    return 'Paper'.toLowerCase();
  } else {
    return 'Scissors'.toLowerCase();
  };
};

console.log(computerPlay())

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt('Rock paper or scissors?: ').toLowerCase();

  computerSelection = computerPlay();
  
  let loseMessage = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}!`;

  let winMessage = `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}!`;
  
  
  
  

  if (playerSelection == computerSelection) {
    return 'It\'s a tie!';
  } else if (playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors'|| playerSelection == 'scissors' && computerSelection == 'rock') {
    return loseMessage;
  } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
    return winMessage;
  } 
  console.log(computerSelection)
}

function game() {
  for (let i = 0; i <= 5 ; i++) {
    console.log(playRound());
  }
}

console.log(game())



