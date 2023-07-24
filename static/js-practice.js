'use strict';

/** ********************
 Make an Event Handler
********************* */

const button = document.querySelector('#popup-alert-button');

function handleClick() {
  alert('Hello!');
}

button.addEventListener('click', handleClick);

/** ***********************
Practice Your Times Tables
************************ */

const multForm = document.querySelector('#multiplying-form');

multForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const multiples = [];
  const num = Number(document.querySelector('#mults-of').value);
  const max = Number(document.querySelector('#max').value);

  for (let i = 1; i <= max; i += 1) {
    if (i % num === 0) {
      multiples.push(i);
    }
  }

  console.log(multiples)
})

/** **************
An Agreeable Form
*************** */

const foodForm = document.querySelector('#agreeable-form');

foodForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const foodDiv = document.querySelector('#favorite-food-input').value;
  document.querySelector('#agreeable-text').textContent = `I like ${foodDiv}, too!`;
});

/** ****************
Five colored primes
***************** */

const PRIME_COLORS = ['orange', 'midnightblue', 'darkgoldenrod', 'green', 'purple'];

// Your Code Here

/** *********
Got Puppies?
********** */

// NOTE: DO NOT CHANGE THE CODE OF THIS FUNCTION
function showPuppies(results) {
  // get the URL for the puppy photo out of the results object
  const puppyURL = results.url;
  const puppyDiv = document.querySelector('#puppies-go-here');
  // clear anything currently in the div
  puppyDiv.innerHTML = null;
  // add the img element
  puppyDiv.insertAdjacentHTML('beforeend', `<img src=${puppyURL} alt="puppy-image">`);
}

// Your Code Here
