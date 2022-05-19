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

