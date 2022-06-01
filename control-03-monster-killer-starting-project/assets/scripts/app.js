// constants hard codded syntax
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "ATTACK_STRONG";

function getMaxLifeValues() {
  const enteredValue = prompt("Please enter a max life amoutn", "100");
  const parsedValue = parseInt(enteredValue);

  // isNaN() will return true if not a numner
  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw { message: "Invalide user input not a number" };
    chosenMaxLife = 100;
  }
  return parsedValue;
}
try {
  let choosenMaxLife = getMaxLifeValues();
} catch (error) {
  console.log(error);
  choosenMaxLife = 100;
  alert(`Oops: ${error}`);
} finally {
  console.log("This code alwasy runs")
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];

let LOGONE = "One";
let LOGTWO = "Two";
let LOGTHREE = "Three";

// Example Switch
switch (battleLog) {
  case LOGONE:
    console.log("One");
    break;
  case LOGTWO:
    console.log("Two");
    break;
  case LOGTHREE:
    console.log(Three);
    break;
}

// For
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// for of
const numbers = [1, 2, 3, 4];

for (const num of numbers) {
  console.log(num);
}

// for in
let myObject = {
  name: "Chris",
  age: 36,
};

for (const key in myObject) {
  console.log(key);
}

// while
while (isLoggedIn) {
  // do something
}

// While - do
let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j < 3)

// Labeled Statements
// outerWhile: do {
//   console.log("Outer", j);
//   innerFor: for (let k = 0; j < 5; j++) {
//     if (k === 3) {
//       break outerWhile;
//     }
//   }
// } while (numberNine < 3);

// Error Handling

function attackMonster(mode) {
  let maxDamage;
  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else if (mode === "ATTACK_STRONG") {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  checkHealth();
}

function basicAttack() {
  attackMonster(MODE_ATTACK);
}

function strongAttack() {
  attackMonster(MODE_STRONG_ATTACK);
}

function healAction() {
  increasePlayerHealth(HEAL_VALUE);
  currentPlayerHealth += HEAL_VALUE;
  checkHealth();
}

function checkHealth() {
  const initialPlayerHealth = currentPlayerHealth;
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("You had an extra life ;)");
    return;
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!");
    reset();
    return;
  } else {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
  }

  if (currentPlayerHealth <= 0 && currentMonsterHealth > 0 && !hasBonusLife) {
    alert("You lost! sorry the monster won");
    reset();
  }
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

adjustHealthBars(chosenMaxLife);
attackBtn.addEventListener("click", basicAttack);
strongAttackBtn.addEventListener("click", strongAttack);
healBtn.addEventListener("click", healAction);
