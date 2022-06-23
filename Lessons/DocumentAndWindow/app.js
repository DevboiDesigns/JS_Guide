const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

const section = document.querySelector('section');
const button = document.querySelector('button');

//section.style.backgroundColor = 'blue';
//section.className = '';
button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  //section.classList.contains('invisible')
  //section.classList.toggle('visible'); // Toggle Class names
  section.classList.toggle('invisible');
});

section.innerHTML = '<h2>New Title</h2>'; // Will replace all other HTML Elements
section.insertAdjacentHTML('beforeend', '<p>Something went wrong!</p>'); // will only render the new content

const newLi = document.createElement('li'); // tag name of element you want to create
newLi.textContent = 'Item 4';
ul.appendChild(newLi); // append new HTML element

ul.lastElementChild.before(button);
ul.lastElementChild.replaceWith(button);

ul.remove();

ul.parentElement.removeChild(ul)

/*

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

console.dir(ulAgain.nextElementSibling) // sibling element after selected element

*/
