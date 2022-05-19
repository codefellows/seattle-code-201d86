'use strict';

// EVENT FOR FORM SUBMISSION
// Step 1: Grab the element to listen to
let myForm = document.getElementById('my-form');

// Step 3: define our handler
function handleSubmit(event){
  event.preventDefault(); // form submission to stop default behavior of form

  let name = event.target.fullName.value;
  console.log(name);

  let age = +event.target.age.value;
  console.log(age);
  console.log( typeof age);

  let housewives = event.target.housewives.value;
  console.log(housewives);

}


// Step 2: Attach the listener - 2 args (event, callback function/event handler)
myForm.addEventListener('submit', handleSubmit);


// BOX CLICK DEMO
//let myContainer = document.getElementById('container');
//let parentEl = document.getElementById('results');


// Step 3: Define our event handler - callback function
// function handleClick(event) {
//   console.log('this is the event', event);
//   console.log('this is the target', event.target);

//   if (event.target.id === 'box-one') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 1 was clicked!';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-two') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 2 was clicked!';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-three') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 3 was clicked!';
//     parentEl.append(pEl);
//   } else {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'CLICK THE BOXES ONLY!';
//     parentEl.append(pEl);
//   }
// }

// Step 2: Add the Event Listener
// myContainer.addEventListener('click', handleClick);
