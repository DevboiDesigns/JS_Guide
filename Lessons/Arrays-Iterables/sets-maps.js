'use strict';

/* ------------- SETS ----------------- */
// only way to make new set
// can pass any iterable
const ids = new Set([1, 2, 3]);
ids.add(2); // Add
ids.delete(2); // Delete
// generally just check if is in set
console.log(ids.has(2)); // true || false
console.log(ids);

for (const entry of ids.entries()) {
  console.log(entry); // array of entries with values as keys
}

for (const entry of ids.values()) {
  console.log(entry); // just values of all entries
}

/* ------------- MAPS ----------------- */
const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };
