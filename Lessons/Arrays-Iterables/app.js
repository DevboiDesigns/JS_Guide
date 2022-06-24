/*          ARRAYS & ITERABLES                 */

// const numbers = [1, 2, 3];

// const moreNumbers = new Array('Hi', 'Welcome'); // empty array
// const fixedArray = new Array(5); // will set empty array with max length 5

// const anotherArray = Array.of(1, 2); // 3rd method

// const arrayAgain = Array.from('Welcome'); // Converts iterable or array like object to array
// console.log(arrayAgain); // [w, e, l, c, o, m, e]

// const listItem = document.querySelectorAll('li');

// const arrayOfLIs = Array.from(listItem);
// console.log(arrayOfLIs);

// // can be mixed types
// const personData = [30, 'Max', { moreDetails: 'Some details' }];
// console.log(personData);

// // Array of arrays
// const arrayOfArrays = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// /*   PUSH , POP, UNSHIFT, SHIFT   */
// const hobbies = ['Music', 'Food', 'Sports'];
// const newHobby = 'Dancing';
// hobbies.push(newHobby);
// hobbies.push('Loving'); // will add to end of array
// hobbies.unshift('Coding'); // will add to beginning of array
// hobbies.pop();
// hobbies.shift();
// hobbies[1] = 'Coding';

// /*      SPLICE          */
// hobbies.splice(0, 0, 'Cooking', 'Bike Riding');
// const removedElements = hobbies.splice(1, 1);
// hobbies.splice(-1, 1); // will start from end of array (-1)

// console.log(hobbies);
// console.log(removedElements);

// /*  Selecting RANGES & Creating COPIES w/ slice()  */
// // SLICE

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, 10];
// // exact copy = new array that will not be affected by original reference
// const storedResults = testResults.concat([3.99, 2]); // will pull out all array items in concat([]) and add to old array making a New array

// testResults.push(5.91);

// testResults.slice(3);

// console.log(testResults, storedResults);

// /* indexOf() & lastIndexOf()   */

// console.log(testResults.indexOf(1.5));
// console.log(testResults.lastIndexOf(1.5));

// /* find() */
// // 1 single object of array
// // 2 index of 1 single element
// // 3  the full array
// const personDataArray = [{ name: 'Max' }, { name: 'Manuel' }];
// // ----------------------------------- 1 ----  2 --------- 3
// const manuel = personDataArray.find((person, index, persons) => {
//   return person.name === 'Manuel';
// });

// // find returns og item so changing will change original value
// //manuel.name = 'Anna';

// const manuelIndex = personDataArray.findIndex((person, idx, persons) => {
//   return person.name === 'Manuel';
// });

// console.log(manuelIndex, 'Index'); // returns Index of matching item

// console.log(manuel, personDataArray);

// console.log(testResults.includes(1.5));

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: Math.trunc(price * (1 + tax)) };
//   return priceObj;
// });

// // console.log(taxAdjustedPrices);

// // a =
// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return 1;
//   }
// });

// // 1 = item iterated over 2 = index 3 = original array
// const filteredArray = prices.filter((price) => price > 6);

// //console.log(filteredArray);

// // -----------
// // let sum = 0

// // prices.forEach((price) => {
// //   sum += price
// // })

// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//   return prevValue + curValue;
// }, 0); // 0 = previousValue

// //console.log(sum);

// const data = 'newyork;10.99;2000';

// const transformedData = data.split(';', 2);

// //console.log(transformedData);

// const nameFragments = ['Max', 'Schwarz'];
// const name = nameFragments.join(' ');
// //console.log(name);

// const copiedNameFragments = [...nameFragments, 'Tim'];
// // console.log(copiedNameFragments);
// // console.log(nameFragments);

// // console.log(Math.min(...prices));

// const personsArray = [
//   { name: 'Max', age: 30 },
//   { name: 'Manuel', age: 31 },
// ];
// const copiedPersonsArray = [
//   ...personsArray.map((person) => ({ name: person.name, age: person.age })),
// ];

// personsArray.push({ name: 'Anna', age: 29 });
// personsArray[0].age = 32;

// console.log(personsArray, copiedPersonsArray);

const nameData = ['Max', 'Schwarz', 30, 'dog', 'ice cream'];

const [first, last, ...otherInfo] = nameData;

console.log(first); // Max

console.log(otherInfo);
