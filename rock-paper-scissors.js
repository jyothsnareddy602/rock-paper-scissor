let score = JSON.parse(localStorage.getItem("score"));
if (score === null) {
  score = { wins: 0, losses: 0, ties: 0 };
}
updateSCore();

function playGame(playerMove) {
  const computerGuess = pickComputerMove();
  let res = '';

  if (playerMove === 'scissors') {
    if (computerGuess === 'rock') res = 'You lose';
    else if (computerGuess === 'paper') res = 'You win';
    else res = 'Tie';
  } else if (playerMove === 'paper') {
    if (computerGuess === 'rock') res = 'You win';
    else if (computerGuess === 'paper') res = 'Tie';
    else res = 'You lose';
  } else if (playerMove === 'rock') {
    if (computerGuess === 'rock') res = 'Tie';
    else if (computerGuess === 'paper') res = 'You lose';
    else res = 'You win';
  }

  if (res === 'You win') score.wins++;
  else if (res === 'You lose') score.losses++;
  else score.ties++;

  localStorage.setItem("score", JSON.stringify(score));
  updateSCore();

  document.querySelector('.js-result').innerHTML = res;
  document.querySelector('.js-moves').innerHTML =
    `You <img class="move-img" src="${playerMove}-emoji.png" alt=""/>
     <img class="move-img" src="${computerGuess}-emoji.png" alt=""/> computer`;
}

function updateSCore() {
  document.querySelector('.js-score').innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1/3) return 'rock';
  else if (randomNumber < 2/3) return 'paper';
  else return 'scissors';
}
