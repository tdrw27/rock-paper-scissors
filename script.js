console.log("Hello World")
let ans1 = 'rock';
let ans2 = 'paper';
let ans3 = 'scissors';

function computerPlay() {
  x = Math.floor(Math.random() *10);
  
  if (x <= 3) {
    return ans1;
  } else if (x <= 6) {
    return ans2;
  } else {
    return ans3;
  }

};

let computerSelection = computerPlay();
console.log(computerSelection);











