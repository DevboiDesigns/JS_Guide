'use strict';

/* ------------- SETS ----------------- */
// only way to make new set
// can pass any iterable
const ids = new Set([1, 2, 3]);
ids.add(2); // Add
ids.delete(2); // Delete
// generally just check if is in set
// console.log(ids.has(2)); // true || false
// console.log(ids);

for (const entry of ids.entries()) {
  // console.log(entry); // array of entries with values as keys
}

for (const entry of ids.values()) {
  // console.log(entry); // just values of all entries
}

/* ------------- MAPS ----------------- */
const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };

const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);
// Add to Map
personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

// Get object from by key as object name itself
// console.log(personData.get(person1));

for (const [key, value] of personData.entries()) {
  // console.log(key, value);
}

for (const value of personData.values()) {
  // console.log(value);
}

/* ------------- WEAK SET ----------------- */
let personAgain = { name: 'Max' };
const personsAgain = new WeakSet();
personsAgain.add(personAgain);

// ... some operations
personAgain = null;

// console.log(personsAgain);

/* ------------- WEAK MAP ----------------- */
const personableData = new WeakMap();
personableData.set(person1, 'Extra info');

console.log(personableData);
