# JavaScript
* [JavaScript Docs](https://developer.mozilla.org/en-US/)
* dynamic, interpreted and weakly typed 
* compiled at runtime 
* make webpages more dynamic 
* runs on a host enviorment 
* Browser & Server 

**Dynamic - Interpreted**
* do not have to manually define the type
* not pre-compiled - parsed and compiled on the fly
* code evaulted and executed at runtime
* code can change at runtime ( type of variable )

**Weakly typed**
* data types are assumed automatically 
* types can change from line to line 
* you dont have to set type when declaring

## Browser
* invented to create more dynamic websites
* can manipulate HTML and CSS, and send background Http requests & more
* JS can not access the local filesystem or interact with operating system 


## Server
* Googles Javascript Engine (V8) was extracted to run JS scripte anywhere (called Node.js)
* Node.js can be exectued on any machine, used to build web backends often
* Node.js can access the local filesystem, interact with the operating system etc. It *Cant* manipulate HTML or CSS

## Key Shortcuts in  VSCode 
* `cmd` + `d` = select multiple versions of same name/ object 
* `shft` + `cmd` + `space` = show parameters of method 

# Syntax

## Varibles & Constants

* camelCase 
* letters & digits - but can not start with a digit 
* staring with $ is allowed 
* staring with _ is allowed 
* no special characters 

```js
// Variable
let userName = "Max"
userName = "Tim"

// Const - use majority of the time  
const totalUsers = 15
```

## Operators
* operators have order of precendance [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

* `+, -, *, /`
* `%` = divide two numbes, yield remainder 
* `**` = exponentiation (e.g. 2 ** 3 = 8)
* `+=`, `-=`, `*=`, `/=`
* add/ subtract one = `number++` / `number--` increment, decrement 
* `||` or
* `&&` and 

**Comparison Operators**
* `!` not 
* `>=` `<=` - greater/ less than or equal 
* `==`, `!=` evalutes true if same value
* `===`, `!==` evalutes true if same type & value  - prefer 

**Double !!**
* `!!""` = false `!!1` = true 
* will force a true/ false not falsy or truthy

**if falsy will default to value** 

```js
const name = someInput || "Max"

const name = isLoggedIn || "Max"
```

## Data Types 

*browser always returns a string*

* Numbers - floating point
* Strings 
* Booleans
* Objects: { }
* Arrays: [ ]
* Undefined
* Null
* Symbol
* BigInt

**String catonation**

* `let string = "This is a " + "String"`

**Template Literal**
*back ticks*

```js
let name = "Chris"
let string = `My name is ${name}`
```

*line break in strings*

```js
"One line\n Second line"
```

*inlclude backslash in string*

```js
"An error \\" + "occured"
```

## Objects 

```js
const myObject = {
  name: "Time",
  age: 23,
  website: null 
};
```

## var, let, const  
* `var` = can be mutated (function scoped) (older-avoid using)
* `let` = can be mutated (block scoped)
* `const` = can not be mutated (default to)

## Functions

*code after return will never run*

*use return to exit the function*

```js 
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

const result = add(5,5)
```

## Converting types
* `+userInput.value` - parseInt = `Number("1991")`
* `parseInt(userInput.value)`
* `currentResult.toString()`
* `String(123)`
* `Boolean(isTrue)`

## Comments 
* `cmd` + `/`

```js
// One comment option

/*
This is also a comment 
*/
```

## null/ undefined/ NaN

**Undefined**
* default value of uninitialized variable

**null**
* never assumed by default
* assign to reset/ clear a variable 

**NaN**
* Not A Number
* Type of number
* result when calculating numbers with invalid type 

## typeof

**will return what the type is**

* `typeof "max"` returns `"string"`

```js
let name = "max
typeof name 
// string 
```

## Conditional Code 

### If - else - else if 

```js
if (calculateType === "add") {
    add()
} else if (calculateType === "subtract") {
  subtract()
} else {
  doNothing()
}
```

## Switch 

```js
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
```

```js
switch (day) {
  case "monday":
    console.log("Mondy");
    console.log("Coding meetup");
    break;
  case "tuesday":
    console.log("Tuesday");
    break;
  case "wednesday":
  case "thursday":
    console.log("Wenesday & Thursday");
    break;
  case "friday":
    console.log("Friday");
    break;
  default:
    console.log("Not a work Day");
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
  console.log(i)
}
```

## for-of

* built to work with arrays

```js
const numbers = [1, 2, 3, 4];

for (const num of numbers) {
  console.log(num)
}
```

## for-in

* built to work with objects

```js
let myObject = {
  name: "Chris",
  age: 36,
};

for (const key in myObject) {
  console.log(key) // key - name 
  console.log(myObject[key]) // value 
}
```

## while

* runs until condition is no longer meet 

```js
while (isLoggedIn) {
  // do something 
}
```

### while-do

* will execute logic first 

```js
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);
```

### Labeled Statements

* will break a particular loop/ statement 
* not as common 

```js
let j = 0;
outerWhile: do {
  console.log("Outer", j);
  innerFor: for (let k = 0; j < 5; j++) {
    if (k === 3) {
      break outerWhile
    }
  }
} while (numberNine < 3)
```

## break & continue

* `break` = will exit out of a loop or function 
* `continue` = will skip iteration, and continue with next iteration 

# Error Handling 
* `throw` - if marked will throw error when init
* `try` & `catch` - how to handle throw
* `finally` - will always run no matter what - any cleanup - for re-throws : not as commom

**Usage**

```js
function getMaxLifeValues() {
  const enteredValue = prompt("Please enter a max life amoutn", "100");
  const parsedValue = parseInt(enteredValue);

  // isNaN() will return true if not a numner
  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw { message: "Invalide user input not a number" }; // marked with `throw` 
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
```

# Importing Scripts in Browser 

* adding defer allows dowloand of scripts and simultaneously parses html 
* add scripts in head 
* defer gurantees order of execution   

```js
<head>
    <script src="/01-Syntax/assets/scripts/vendor.js" defer></script>
    <script src="/01-Syntax/assets/scripts/app.js" defer></script>
  </head>
```

* Async

**allows download of script immediately while still parsing, but executes code immediately**

*generally for when code doesnt rely on view*

*e.g. sending data to a server*

```js
<head>
    <script src="/01-Syntax/assets/scripts/vendor.js" async></script>
    <script src="/01-Syntax/assets/scripts/app.js" async></script>
  </head>
```