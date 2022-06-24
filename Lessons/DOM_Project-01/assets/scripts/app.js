'use strict';

const addMovieButton = document.getElementById('add-movie-button');
const addMovieModal = document.getElementById('add-modal');
const cancelButton = document.getElementById('cancel-button');
const backdrop = document.getElementById('backdrop');
const confirmAddMovie = document.getElementById('confirm-add-movie');
const entryTextSection = document.getElementById('entry-text');
const movieList = document.getElementById('movie-list');
const showDeleteModal = document.getElementById('delete-modal');
const cancelDeteteMovie = document.getElementById('cancel-delete-movie');
let confirmDeleteMovie = document.getElementById('confirm-delete-movie');

const addMovieInputs = addMovieModal.querySelectorAll('input');
// const movieTitle = document.getElementById('title');
// const movieImage = document.getElementById('image-url');
// const movieRating = document.getElementById('rating');

const movies = [];

// Update preview text
const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

// Add Movie To List
const renderNewMovieElement = (newMovie) => {
  const movieElement = document.createElement('li');
  movieElement.className = 'movie-element';
  movieElement.innerHTML = `
  <div class="movie-element__image">
   <img src ="${newMovie.image}" alt="${newMovie.title}">
  </div>
  <div>
  <div class="movie-element__info">
    <h2>${newMovie.title}</h2>
    <p>${newMovie.rating}/5 rating</p>
  </div>
  `; // ---- bind() will pass id to function
  movieElement.addEventListener(
    'click',
    presentDeleteMovie.bind(null, newMovie.id)
  );
  movieList.append(movieElement);
};

// Cancel Delete Movie
const cancelDelete = () => {
  showDeleteModal.classList.remove('visible');
  closeAction();
};

// Show Delete Movie Options
const presentDeleteMovie = (movieId) => {
  showDeleteModal.classList.add('visible');
  hideBackdrop();

  // Clone Button to not duplicate Event Listeners and uniquely identify move id to button
  confirmDeleteMovie.replaceWith(confirmDeleteMovie.cloneNode(true));
  // re-query new button that has now been cloned
  confirmDeleteMovie = document.getElementById('confirm-delete-movie');
  // add Event to new cloned button
  confirmDeleteMovie.addEventListener('click', deleteMovie.bind(null, movieId));
};

// Delete Movie from array and html
const deleteMovie = (movieId) => {
  const movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    // will increment until finding movie with id will exit for loop and execute removing that index
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  movieList.children[movieIndex].remove();
  cancelDelete();
  updateUI();
};

// Hide Backdrop
const hideBackdrop = () => {
  backdrop.classList.add('visible');
};

// Show Add Movie Modal
const showAddMovieModal = () => {
  addMovieModal.classList.add('visible');
  hideBackdrop();
};

// Clear Add Movie Inputs
const clearMovieInputs = () => {
  for (const userInput of addMovieInputs) {
    userInput.value = '';
  }
};

// Cancel Action
const closeAction = () => {
  addMovieModal.classList.remove('visible');
  backdrop.classList.remove('visible');
  clearMovieInputs();
};

// Add Movie
const addMovie = () => {
  let titleValue = addMovieInputs[0].value;
  let imageValue = addMovieInputs[1].value;
  let ratingValue = addMovieInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    // empty fields
    alert('Please enter valid values (rating between 1 and 5');
  } else {
    const newMovie = {
      id: Math.random().toString,
      title: titleValue,
      image: imageValue,
      rating: ratingValue,
    };

    movies.push(newMovie);
    closeAction();
    clearMovieInputs();
    updateUI();
    renderNewMovieElement(newMovie);

    console.log(movies);
  }
};

addMovieButton.addEventListener('click', showAddMovieModal);
cancelButton.addEventListener('click', closeAction);
backdrop.addEventListener('click', closeAction);
confirmAddMovie.addEventListener('click', addMovie);
cancelDeteteMovie.addEventListener('click', cancelDelete);
//confirmDeleteMovie.addEventListener('click', deleteMovie) add Event at point when id is passed /.bind() to func
