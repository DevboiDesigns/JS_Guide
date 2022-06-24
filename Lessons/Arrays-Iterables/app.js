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

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

// for (const price of prices) {
//   taxAdjustedPrices.push(Math.trunc(price * (1 + tax)));
// }

//
let priceObjArr = [];
prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: Math.trunc(price * (1 + tax)) };
  taxAdjustedPrices.push(Math.trunc(price * (1 + tax)));
  priceObjArr.push(priceObj);
});

console.log(taxAdjustedPrices);
console.log(priceObjArr);
