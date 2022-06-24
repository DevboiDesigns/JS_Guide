# Fundamentals

- [JavaScript Docs](https://developer.mozilla.org/en-US/)
- dynamic, interpreted and weakly typed
- compiled at runtime
- make webpages more dynamic
- runs on a host enviorment
- Browser & Server

**Dynamic - Interpreted**

- do not have to manually define the type
- not pre-compiled - parsed and compiled on the fly
- code evaulted and executed at runtime
- code can change at runtime ( type of variable )

**Weakly typed**

- data types are assumed automatically
- types can change from line to line
- you dont have to set type when declaring

## Browser

- invented to create more dynamic websites
- can manipulate HTML and CSS, and send background Http requests & more
- JS can not access the local filesystem or interact with operating system

## Server

- Googles Javascript Engine (V8) was extracted to run JS scripte anywhere (called Node.js)
- Node.js can be exectued on any machine, used to build web backends often
- Node.js can access the local filesystem, interact with the operating system etc. It _Cant_ manipulate HTML or CSS

## Key Shortcuts in VSCode

- `cmd` + `d` = select multiple versions of same name/ object
- `shft` + `cmd` + `space` = show parameters of method

## Prettier

- create file `.prettierrc`
- add below code to save with sinle qoutes

```json
{
  "singleQuote": true
}
```

# Syntax

## Strict Mode

- make first line of code
- helps avoid mistakes and bugs
- adds print statements to console

```js
'use strict';
```

## Varibles & Constants

- camelCase
- letters & digits - but can not start with a digit
- staring with $ is allowed
- staring with \_ is allowed
- no special characters

```js
// Variable
let userName = 'Max';
userName = 'Tim';

// Const - use majority of the time
const totalUsers = 15;
```

## Operators

- operators have order of precendance [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

- `+, -, *, /`
- `%` = divide two numbes, yield remainder
- `**` = exponentiation (e.g. 2 \*\* 3 = 8)
- `+=`, `-=`, `*=`, `/=`
- add/ subtract one = `number++` / `number--` increment, decrement
- `||` or
- `&&` and

**Comparison Operators**

- `!` not
- `>=` `<=` - greater/ less than or equal
- `==`, `!=` evalutes true if same value
- `===`, `!==` evalutes true if same type & value - prefer

**Double !!**

- `!!""` = false `!!1` = true
- will force a true/ false not falsy or truthy

**if falsy will default to value**

```js
const name = someInput || 'Max';

const name = isLoggedIn || 'Max';
```

## Data Types

_browser always returns a string_

- Numbers - floating point
- Strings
- Booleans
- Objects: { }
- Arrays: [ ]
- Undefined
- Null
- Symbol
- BigInt

**String catonation**

- `let string = "This is a " + "String"`

**Template Literal**
_back ticks_

```js
let name = 'Chris';
let string = `My name is ${name}`;
```

_line break in strings_

```js
'One line\n Second line';
```

_inlclude backslash in string_

```js
'An error \\' + 'occured';
```

## Objects

```js
const myObject = {
  name: 'Tim',
  age: 23,
  website: null,
};
```

## var, let, const

- `var` = can be mutated (function scoped) (older-avoid using)
- `let` = can be mutated (block scoped)
- `const` = can not be mutated (default to)

## Functions

- Parameters - what is specified between parentheses
- Arguments - are the concrete values you pass to a function when calling

_code after return will never run_

_use return to exit the function_

- basic declaration
- hoisted to top

```js
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

const result = add(5, 5);
```

### Expression

- hoisted but initialized (cant use out of scope)

```js
const add = function add(num1, num2) {
  const result = num1 + num2;
  return result;
};
```

### Arrow

```js
// Function Expression
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow Function
const calcAge2 = (birthYear) => 2037 - birthYear;
```

```js
// ----------------------------------------- default arugment
const getWinner = (compChoice, playerChoice = DEFAULT_CHOICE) =>
  compChoice === playerChoice
    ? RESULT_DRAW
    : (compChoice === ROCK && playerChoice === PAPER) ||
      (compChoice === PAPER && playerChoice === SCISSORS) ||
      (compChoice === SCISSORS && playerChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMP_WINS;
```

### Methods

```js
const person = {
  greet: function greet() {
    console.log('Hello there!');
  },
};

person.greet();
```

### Anonymous

- not easy to debug because the name of function can not be shown by browser/ debugger

```js
const start = function () {
  console.log('Start');
};

startGameBtn.addEventListener('click', function () {
  console.log('Start');
});
```

### Rest Parameters (Rest Operator)

- rest operator must be last parameter
- recomended over older rest operator

```js
// will spread into array
const sumUp = (...numbers) => {
  let sum = 0;
  // in : will list all numbers out | of : loops through and adds
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};

console.log(sumUp(1, 2, 3, 4, 5, 6, 7, 8)); // 36
```

- function declared with keyword `function` have access to `arguments` for rest operator without declaring parameter (older not-recomended)

```js
const subtractUp = function () {
  let sum = 0;
  // in : will list all numbers out | of : loops through and adds
  for (const num of arguments) {
    sum -= num;
  }
  return sum;
};
```

### Nested

```js
const sumUp = (...numbers) => {
  const validateNumber = (number) => {
    // will check if is actually a number - isNaN (is not a number) true 0 : false number
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  // in : will list all numbers out | of : loops through and adds
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  return sum;
};
```

### Callbacks

```js
// resultHanler = function to be called, can be any name common `cb`
const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  // in : will list all numbers out | of : loops through and adds
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  // 1 parameter passed to call back
  resultHandler(sum);
};

// 2 function to handle callbacks parameter
const showResult = (result) => {
  alert(`The result after adding all numbers is ${result}`);
};

// 3 execution of callback with function being passed original `sum` parameter
console.log(sumUp(showResult, 1, 2, 3, 4, 5));
```

**REFACTOR**

```js
const combine = (resultHandler, method, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    if (method === 'ADD') {
      sum += validateNumber(num);
      resultHandler('adding', sum);
    } else if (method === 'SUB') {
      sum -= validateNumber(num);
      resultHandler('subtracting', sum);
    }
  }
};

const showResult = (method, result) => {
  alert(`The result after ${method} all numbers is ${result}`);
};

// BIND - a function that is not immediately called but set with parameters
combine(showResult.bind(), 'ADD', 1, 2, 3, 4, 5); // 15
combine(showResult, 'SUB', 1, 2, 3, 4, 5, 6, 7, 8); // -36
```

### .bind()

- BIND - a function that is not immediately called but set with parameters
- properties used on bind method are passed first to the function being set
- can use bind to pass an id property to function when called to identify element etc

```js
combine(showResult.bind(this, 'adding'), 'ADD', 1, 2, 3, 4, 5); // 15
```

### .apply()

### .call()

## Converting types

- `+userInput.value` - parseInt = `Number("1991")`
- `parseInt(userInput.value)`
- `currentResult.toString()`
- `String(123)`
- `Boolean(isTrue)`

## Comments

- `cmd` + `/`

```js
// One comment option

/*
This is also a comment 
*/
```

## null/ undefined/ NaN

**Undefined**

- default value of uninitialized variable

**null**

- never assumed by default
- assign to reset/ clear a variable

**NaN**

- Not A Number
- Type of number
- result when calculating numbers with invalid type

## typeof

**will return what the type is**

- `typeof "max"` returns `"string"`

```js
let name = "max
typeof name
// string
```

## Conditional Code

### If - else - else if

```js
if (calculateType === 'add') {
  add();
} else if (calculateType === 'subtract') {
  subtract();
} else {
  doNothing();
}
```

## Switch

```js
let LOGONE = 'One';
let LOGTWO = 'Two';
let LOGTHREE = 'Three';

// Example Switch
switch (battleLog) {
  case LOGONE:
    console.log('One');
    break;
  case LOGTWO:
    console.log('Two');
    break;
  case LOGTHREE:
    console.log(Three);
    break;
}
```

```js
switch (day) {
  case 'monday':
    console.log('Mondy');
    console.log('Coding meetup');
    break;
  case 'tuesday':
    console.log('Tuesday');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Wenesday & Thursday');
    break;
  case 'friday':
    console.log('Friday');
    break;
  default:
    console.log('Not a work Day');
}
```

## Ternary Operator

```js
let highestBMI =
  markBMI > johnBMI
    ? `Mark has the highest at ${markBMI} `
    : `John has the highest at ${johnBMI}`;
```

# Loops

## for

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

## for-of

- built to work with arrays

```js
const numbers = [1, 2, 3, 4];

for (const num of numbers) {
  console.log(num);
}
```

## for-in

- built to work with objects

```js
let myObject = {
  name: 'Chris',
  age: 36,
};

for (const key in myObject) {
  console.log(key); // key - name
  console.log(myObject[key]); // value
}
```

## while

- runs until condition is no longer meet

```js
while (isLoggedIn) {
  // do something
}
```

### while-do

- will execute logic first

```js
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);
```

### Labeled Statements

- will break a particular loop/ statement
- not as common

```js
let j = 0;
outerWhile: do {
  console.log('Outer', j);
  innerFor: for (let k = 0; j < 5; j++) {
    if (k === 3) {
      break outerWhile;
    }
  }
} while (numberNine < 3);
```

## break & continue

- `break` = will exit out of a loop or function
- `continue` = will skip iteration, and continue with next iteration

# Arrays & Iterable protocol

[Files](Lessons/Arrays-Iterables)

## Creating

1. `const numbers = [1, 2, 3]`
2. `const moreNumbers = new Array('Hi', 'Welcome')`
3. `const fixedArray = new Array(5)` will set empty array with max length 5
4. `const anotherArray = Array.of(1, 2)`
5. `const arrayAgain = Array.from('Welcome')` Converts iterable or array like - [w, e, l, c, o, m, e]
6. `const personData = [30, 'Max', { moreDetails: 'Some details' }];` mixed types

## Adding & Removing

- `push()`

**adds to end of array**

```js
const hobbies = ['Music', 'Food', 'Sports'];
const newHobby = 'Dancing';
hobbies.push(newHobby);
```

- `unshift()`

**adds to beginning of array**

```js
hobbies.unshift('Coding');
```

- `pop()`

**removes last item from array**

```js
hobbies.pop();
```

- `shift()`

**removes first item in array**

```js
hobbies.shift();
```

- set index direct

```js
hobbies[1] = 'Coding';
```

- `splice(a, b, c)`
  - a = index to insert at
  - b = amount of index's to delete from a on
  - c = items to be inserted

```js
hobbies.splice(0, 0, 'Cooking', 'Bike Riding');
```

**using splice to delete an item**

```js
hobbies.splice(1, 1);
```

```js
hobbies.splice(-1, 1); // will start from end of array (-1 is last element)
```

**returns removed elements**

```js
const removedElements = hobbies.splice(1, 1);
```

## Ranges & Copies w/ slice()

- `slice()`

**exact copy = new array that will not be affected by original reference**

```js
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.slice();

testResults.push(5.91);

console.log(testResults, storedResults);
```

**selecting ranges**

**parameters return start and end of new array**

```js
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// 0 - start of array index || 2 - end of array index (is not included in array)
const storedResults = testResults.slice(0, 2);

testResults.push(5.91);

console.log(testResults, storedResults);
```

**will select everything from start index to end of array**

```js
testResults.slice(3);
```

## Concat

- `concat([])`

```js
const storedResults = testResults.concat([3.99, 2]); // will pull out all array items in concat([]) and add to old array making a New array
```

## indexOf() & lastIndexOf()

- `indexOf()`

will return the index of item passed to method, will stop after first value if there are duplicates

```js
const testResults = [1, 5.3, 1.5, 10.99, 1.5, 10];
console.log(testResults.indexOf(1.5)); // index 2
```

- `lastIndexOf()`

returns index going from opposite direction (from end of array)

```js
console.log(testResults.lastIndexOf(1.5)); // index 4
```

## Find

- `find()`
  1. single object of array
  2. index of 1 single element
  3. the full array

**parameter 2 & 3 not as common to use**

```js
const personDataArray = [{ name: 'Max' }, { name: 'Manuel' }];
// --------------------------------- #1 ----  #2 --------- #3
const manuel = personDataArray.find((person, index, persons) => {
  return person.name === 'Manuel';
});
```

**find returns original item, changing value will also change original value**

**not a copy**

```js
manuel.name = 'Anna';

console.log(manuel, personDataArray);
```

- findIndex()

**will return index of matching condition**

```js
const manuelIndex = personDataArray.findIndex((person, idx, persons) => {
  return person.name === 'Manuel';
});

console.log(manuelIndex, 'Index'); // returns Index of matching item
```

## Includes

- `includes()`

**returns true or false if in array**

```js
console.log(testResults.includes(1.5));
```

## ForEach

- `forEach()`
- easier access to index

```js
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(Math.trunc(price * (1 + tax)));
// }

//
let priceObjArr = [];
prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: Math.trunc(price * (1 + tax)) };
  taxAdjustedPrices.push(Math.trunc(price * (1 + tax)));
  priceObjArr.push(priceObj);
});

console.log(taxAdjustedPrices);
console.log(priceObjArr);
```

# Error Handling

- `throw` - if marked will throw error when init
- `try` & `catch` - how to handle throw
- `finally` - will always run no matter what - any cleanup - for re-throws : not as commom

**Usage**

```js
function getMaxLifeValues() {
  const enteredValue = prompt('Please enter a max life amoutn', '100');
  const parsedValue = parseInt(enteredValue);

  // isNaN() will return true if not a numner
  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw { message: 'Invalide user input not a number' }; // marked with `throw`
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
  console.log('This code alwasy runs');
}
```

## Primitive & Reference Values

- Primitive - Strings, Numbers, Booleans, null, undefined, & Symbols - (stored in memory on stack - lightweight)
- Reference - all other objects (more expensive)

# Importing Scripts in Browser

- adding defer allows dowloand of scripts and simultaneously parses html
- add scripts in head
- defer gurantees order of execution

```js
<head>
  <script src="/01-Syntax/assets/scripts/vendor.js" defer></script>
  <script src="/01-Syntax/assets/scripts/app.js" defer></script>
</head>
```

- Async

**allows download of script immediately while still parsing, but executes code immediately**

_generally for when code doesnt rely on view_

_e.g. sending data to a server_

```js
<head>
  <script src="/01-Syntax/assets/scripts/vendor.js" async></script>
  <script src="/01-Syntax/assets/scripts/app.js" async></script>
</head>
```

# DOM & HTML Code

- Document Object Model
- exposed WEB API to allow JS to work with parsed document

## Document

- root DOM node
- provides access to element querying, DOM content etc

## Window

- document is the property on window
- the active Browser window/ Tab
- global storage for script, also provides access to window-specific properties and methods

**$0 gets access to last element in dev tools console**

## Querying Elements

**Returns single element, by CSS selector, by ID**
**DOM nodes are just JS objects, reference values: these methods return object reference**

- `querySelector()` - querySelector('.message') - classes (.) / ids(#)
- `getElementById()`

**returns collections of elements (array like objects): NodeList**

- `querySelectorAll()` - non-live NodeList
- `getXByY` - live NodeList
- `getElementsByTagName()`

### Nodes

- objects that make up the DOM
- HTML tags are element nodes
- text creates text nodes
- attributes create attribute nodes

### Elements

- one type of node
- have special properties and methods to interact with element (styles etc.)
- can be selected in various ways
- can be created and removed via JS

## Query Methods

- `document.querySelector(<CSS selector>)` - [Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- `document.getElementById(<ID>)` - [Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- `document.querySelectorAll(<CSS selector>)` - [Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- `document.getElementsByClassName(<CSS CLASS>)` - [Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
- `document.getElementsByTagName(<HTML TAG>)` - [Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName)

## DOM Traversal & Query Selection

```js
// Non-live List - will NOT reflect changes made
//const listItemElements = document.querySelectorAll('li')

// Live List - will reflect changes made to them
const listItemElements = document.getElementsByTagName('li');

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}

const h1 = document.getElementById('main-title');
h1.textContent = 'Some new text for the moment';
h1.style.color = 'white';
h1.style.backgroundColor = 'purple';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed)';

const body = document.body;
body.querySelector('li:last-of-type');

const ul = document.querySelector('ul');
ul.children[0]; // array of list items
console.dir(ul.children[0].textContent);

ul.childNodes;
console.dir(ul.childNodes); // shows empty text nodes

ul.firstChild; // includes white space
ul.firstElementChild; // Element
ul.lastElementChild;

// ----------------

const liFirst = document.querySelector('li');
liFirst.parentNode;
liFirst.parentElement; // Nearest parent Element

liFirst.closest('body'); // will look up scope to find nearest parent
console.dir(liFirst.closest('body'));

// get Parent Element
const ulAgain = li.parentElement;
console.dir(ulAgain);

ulAgain.previousElementSibling; // sibling element before selected element
console.dir(ulAgain.previousElementSibling); // Header

console.dir(ulAgain.nextElementSibling); // sibling element after selected element
```

```js
section.classList.toggle('visible'); // Toggle Class names
```

## Inserting & Removing HTML

**HTML String**

- `createElement()`

**innerHTML**

- `insertAdjacentHTML()`
- `innerHTML = `

**Add (render) HTML String / specific position**

- append new DOM element / node

- `insertAdjacentElement()`
- `appendChild()` | `append()`
- `prepend()` | `before()` | `after()` | `insertBefore()`
- `replaceChild()`
- `removeChild()`
- `remove()`
- `item.parentElement.removeChild(item)`

### Adding Elements

- Will replace all other HTML Elements

```js
section.innerHTML = '<h2>New Title</h2>';
```

- will only render the new content

```js
section.insertAdjacentHTML('beforeend', '<p>Something went wrong!</p>');
```

- append

```js
list.append(newLi);
```

- programmatically insert code

```js
const newLi = document.createElement('li'); // tag name of element you want to create
newLi.textContent = 'Item 4';
ul.appendChild(newLi); // append new HTML element
```

- cloning

* copy elements

```js
const newLi2 = newLi.cloneNode(true);
```

- removing elements

```js
ul.remove();
```

**support on more browsers**

```js
ul.parentElement.removeChild(ul);
```
