'use strict';

// Accessing Classes syntax
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnsOpen = document.querySelectorAll('.show-modal');

const openModalHandler = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalHandler = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let btnCount = 0; btnCount < btnsOpen.length; btnCount++) {
  btnsOpen[btnCount].addEventListener('click', openModalHandler);
}

btnClose.addEventListener('click', closeModalHandler);
overlay.addEventListener('click', closeModalHandler);

// Add Event Listener to keypresses on keyboard
// Closes modal when Escape is pressed
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalHandler();
  }
});

//console.log(btnsOpen);
