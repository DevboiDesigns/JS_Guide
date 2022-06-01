# JavaScript
* dynamic, interpreted and weakly typed 
* compiled at runtime 
* make webpages more dynamic 
* runs on a host enviorment 
* Browser & Server 

**Dynamic - Interpreted**
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

* `+, -, *, /`
* `%` = divide two numbes, yield remainder 
* `**` = exponentiation (e.g. 2 ** 3 = 8)
* `+=`, `-=`, `*=`, `/=`
* add/ subtract one = `number++` / `number--` increment, decrement 

## Data Types 

*browser always returns a string*

* Numbers 
* Strings 
* Booleans
* Objects: { }
* Arrays: [ ]

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

## Functions

* returning values
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
* `+userInput.value` - pasrseInt
* `parseInt(userInput.value)`
* `currentResult.toString()`

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

## Key Shortcuts in  VSCode 
* `cmd` + `d` = select multiple versions of same name/ object 
* `shft` + `cmd` + `space` = show parameters of method 


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