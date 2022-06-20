const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function () {
  // Brower prompt/ message that pops up to type in string/ text
  const selection = prompt(
    `${ROCK}, ${PAPER}, or ${SCISSORS}?`,
    ''
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you!`);
    return DEFAULT_CHOICE;
  }
  return selection;
};

startGameBtn.addEventListener('click', function () {
  if (gameIsRunning) {
    return;
  } else {
    gameIsRunning = true;
  }
  console.log('Game is Starting!');
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});
