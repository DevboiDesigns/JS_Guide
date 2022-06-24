'use strict';

// querySelector() - classes (.) / ids(#)
const messgToUser = document.querySelector('.message');
const number = document.querySelector('.number');
const resetGame = document.getElementById('reset-game');
const score = document.querySelector('.score');
const highScoreLabel = document.getElementById('highscore-label');
const userInput = document.querySelector('.guess');
const checkButton = document.getElementById('check-button');
let secretNumber = Math.trunc(Math.random() * 20) + 1; // number 1 - 20 with no decimals .trunc() (+1 to get to 20)
// Select entire body of html doc
const theBody = document.querySelector('body');

const checkUserNum = () => {
  if (!userInput.value) {
    messgToUser.textContent = '⛔️ No number!';
  } else if (+userInput.value === secretNumber) {
    messgToUser.textContent = '🎉 Correct Number!';
    number.textContent = secretNumber;
    theBody.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    setHighScore();
  } else if (+userInput.value > secretNumber) {
    if (+score.textContent > 0) {
      score.textContent--;
      messgToUser.textContent = 'Too high!';
    } else {
      userLost();
    }
  } else if (+userInput.value < secretNumber) {
    if (+score.textContent > 0) {
      score.textContent--;
      messgToUser.textContent = 'Too low!';
    } else {
      userLost();
    }
  }
};

function userLost() {
  if (+score.textContent < 1) {
    messgToUser.textContent = 'You Lost!';
    score.textContent = 0;
  }
}

const resetGameHandler = () => {
  score.textContent = 20;
  userInput.value = '';
  messgToUser.textContent = 'Start guessing....';
  number.textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  theBody.style.backgroundColor = '#222';
};

const setHighScore = () => {
  if (!highScoreLabel) {
    highScoreLabel.textContent = score.textContent;
  } else if (+score.textContent > +highScoreLabel.textContent) {
    highScoreLabel.textContent = score.textContent;
  }
};

resetGameHandler();
highScoreLabel.textContent = 0;
checkButton.addEventListener('click', checkUserNum);
resetGame.addEventListener('click', resetGameHandler);

console.log(secretNumber);
