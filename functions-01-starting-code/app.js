const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMP_WINS = 'COMP_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  // Brower prompt/ message that pops up to type in string/ text
  const selection = prompt(
    `${ROCK}, ${PAPER}, or ${SCISSORS}?`,
    ''
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (compChoice, playerChoice = DEFAULT_CHOICE) =>
  compChoice === playerChoice
    ? RESULT_DRAW
    : (compChoice === ROCK && playerChoice === PAPER) ||
      (compChoice === PAPER && playerChoice === SCISSORS) ||
      (compChoice === SCISSORS && playerChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMP_WINS;

// if (compChoice === playerChoice) {
//   return RESULT_DRAW;
// } else if (
//   (compChoice === ROCK && playerChoice === PAPER) ||
//   (compChoice === PAPER && playerChoice === SCISSORS) ||
//   (compChoice === SCISSORS && playerChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMP_WINS;
// }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  } else {
    gameIsRunning = true;
  }
  console.log('Game is Starting!');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }

  // --------------- short hand ternary to check if prop is defined or return default - ${playerChoice || DEFAULT_CHOICE}
  let message = `You picked ${
    playerChoice || DEFAULT_CHOICE
  } & the computer picked ${computerChoice} : `;
  if (winner === RESULT_DRAW) {
    message = message + `you had a draw!`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + `you won!`;
  } else {
    message = message + `you lost :(`;
  }
  alert(message);
  gameIsRunning = false;
});

const combine = (resultHandler, type, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    if (type === 'ADD') {
      sum += validateNumber(num);
      resultHandler('adding', sum);
    } else if (type === 'SUB') {
      sum -= validateNumber(num);
      resultHandler(sum);
    }
  }
};

const showResult = (method, result) => {
  alert(`The result after ${method} all numbers is ${result}`);
};

// BIND - a function that is not immediately called but set with parameters
combine(showResult.bind(this, 'adding'), 'ADD', 1, 2, 3, 4, 5); // 15
combine(showResult.bind(this, 'subtracting'), 'SUB', 1, 2, 3, 4, 5, 6, 7, 8); // -36

// const subtractUp = function (cb, ...numbers) {
//   let sum = 0;
//   // in : will list all numbers out | of : loops through and adds
//   for (const num of numbers) {
//     sum -= num;
//   }
//   cb('subtracting', sum);
// };

// console.log(sumUp(1, 2, 3, 4, 5, 6, 7, 8)); // 36
