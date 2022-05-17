'use strict';

// Jose is a volunteer for the kitten rescue... they need a way to get the profiles of kittens who will be up for adoption onto the page... new kittens come in and they need to be added. Jose knows a little bit of javascript... he can make objects!

// what are we going to display?
// Kittens
// figure out what info about each kitten we need to show:
// name
// age with a function - 3 months and 12 months
// interests []
// isGoodWithCats
// isGoodWithDogs
// isGoodWithKids
// photo

// ****** WINDOW INTO THE DOM *******
// 1 way to do this: document.getElementById = method that will take a string for ID
// 2nd way to do this: document.querySelector = method that takes in a string of either an ID, className, or element type

let kittenSection = document.getElementById('kitten-profiles');

// let table = document.getElementById('table');

console.log(kittenSection);

// ***** HELPER FUNCTION - GENERATE A RANDOM NUMBER *****
// got from mdn docs
function randomAge(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ********** CONSTRUCTOR FUNCTION REFACTOR *************

// array to store all my created kitten objects
let kittenCaboodle = [];

// CONSTRUCTOR
function Kitten(name, interests, isGoodWithCats, isGoodWithDogs, isGoodWithKids, photo){
  this.name = name;
  this.interests = interests;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithKids = isGoodWithKids;
  this.photo = photo;
  this.age = 0;

  kittenCaboodle.push(this); // this refers to the object that will be created
}

// ***** CONVERTING METHODS TO PROTOTYPES = INHERITS ******

Kitten.prototype.getAge = function(){
  this.age = `${randomAge(3,12)} months old`;
}

Kitten.prototype.render = function(){
  let articleElem = document.createElement('article');
  kittenSection.appendChild(articleElem);

  let h2Elem = document.createElement('h2');
  h2Elem.textContent = this.name;
  articleElem.appendChild(h2Elem);

  let pElem = document.createElement('p');
  pElem.textContent = `${this.name} is adorable and is ${this.age}`;
  articleElem.appendChild(pElem);

  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for(let i = 0; i < this.interests.length; i++){
    let liElem = document.createElement('li');
    liElem.textContent = this.interests[i];
    ulElem.appendChild(liElem);
  }

  let imgElem = document.createElement('img');
  imgElem.src = this.photo;
  imgElem.alt = `${this.name} is adorable and is ${this.age}`;
  articleElem.appendChild(imgElem);

  // ***** TABLE DOM RENDER ******
  let tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  // TABLE ROW 1
  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let th1Elem = document.createElement('th');
  th1Elem.textContent = 'Good with Cats';
  row1.appendChild(th1Elem);

  let th2Elem = document.createElement('th');
  th2Elem.textContent = 'Good with Dogs';
  row1.appendChild(th2Elem);

  let th3Elem = document.createElement('th');
  th3Elem.textContent = 'Good with Kids';
  row1.appendChild(th3Elem);

  // TABLE ROW 2
  let row2 = document.createElement('tr');
  tableElem.appendChild(row2);

  let td1Elem = document.createElement('td');
  td1Elem.textContent = this.isGoodWithCats;
  row2.appendChild(td1Elem);

  let td2Elem = document.createElement('td');
  td2Elem.textContent = this.isGoodWithDogs;
  row2.appendChild(td2Elem);

  let td3Elem = document.createElement('td');
  td3Elem.textContent = this.isGoodWithKids;
  row2.appendChild(td3Elem);
}

// **** INSTANTIATE KITTIES ****

new Kitten('Frankie', ['wet food', 'knocking stuff of counters', 'cat nip'], true, false, true, 'img/frankie.jpeg');
new Kitten('Jumper', ['dry food', 'plotting', 'fish cookies'], true, false, false, 'img/jumper.jpeg');
new Kitten('Serena', ['mice', 'lazers', 'scratching'], false, false, false, 'img/serena.jpeg');

// HELPER FUNCTION TO CALL ALL THE METHODS
function renderAllKitties(){

  // Loops through the kitten array and calls the necessary methods to generate the age and render kitties to the page
  for(let i = 0; i < kittenCaboodle.length; i++){
    kittenCaboodle[i].getAge();
    kittenCaboodle[i].render();
  }
}

renderAllKitties();


// ******* OBJECTS LITERALS *******

// let frankie = {
//   name: 'Frankie',
//   age: 0,
//   interests: ['wet food', 'knocking stuff of counters', 'cat nip'],
//   isGoodWithCats: true,
//   isGoodWithDogs: false,
//   isGoodWithKids: true,
//   photo: 'img/frankie.jpeg',
//   getAge: function(){
//     this.age = `${randomAge(3,12)} months old`
//   },

//   // **** DOM MANIPULATION ***
//   // kitties will render themselves and add their info via render method
//   render: function(){
//     // DOM Manipulation: Create element then give it context if needed
//     let articleElem = document.createElement('article');
//     // Append it to the DOM -> parentElem.appendChild(childElem);
//     kittenSection.appendChild(articleElem);

//     // creating the h2 element
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name; // context again is option in this case we are using the name of the kitty for the h2 element
//     articleElem.appendChild(h2Elem); // article is the parent element for each kitty

//     let pElem = document.createElement('p');
//     pElem.textContent = `${this.name} is adorable and is ${this.age}`;
//     articleElem.appendChild(pElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.interests.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = this.interests[i];
//       ulElem.appendChild(liElem);
//     }

//     let imgElem = document.createElement('img');
//     imgElem.src = this.photo;
//     imgElem.alt = `${this.name} is adorable and is ${this.age}`;
//     articleElem.appendChild(imgElem);
//   }
// };

// frankie.getAge();  // need to call this METHOD to generate age for frankie
// frankie.render(); // need to call this METHOD to render all the HTML to the page


// let jumper = {
//   name: 'Jumper',
//   age: 0,
//   interests: ['dry food', 'plotting', 'fish cookies'],
//   isGoodWithCats: true,
//   isGoodWithDogs: true,
//   isGoodWithKids: true,
//   photo: 'img/jumper.jpeg',
//   getAge: function(){
//     this.age = `${randomAge(3,12)} months old`
//   },

//   // **** DOM MANIPULATION ***
//   render: function(){
//     // Create element
//     let articleElem = document.createElement('article');
//     // Add to the DOM
//     kittenSection.appendChild(articleElem);

//     // h2
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name; // optional
//     articleElem.appendChild(h2Elem);

//     let pElem = document.createElement('p');
//     pElem.textContent = `${this.name} is adorable and is ${this.age}`;
//     articleElem.appendChild(pElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.interests.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = this.interests[i];
//       ulElem.appendChild(liElem);
//     }

//     let imgElem = document.createElement('img');
//     imgElem.src = this.photo;
//     imgElem.alt = `${this.name} is adorable and is ${this.age}`;
//     articleElem.appendChild(imgElem);
//   }
// };

// jumper.getAge();
// jumper.render();

// let serena = {
//   name: 'Serena',
//   age: 0,
//   interests: ['dry food', 'plotting', 'fish cookies'],
//   isGoodWithCats: false,
//   isGoodWithDogs: true,
//   isGoodWithKids: false,
//   photo: 'img/serena.jpeg',
//   getAge: function(){
//     this.age = `${randomAge(3,12)} months old`
//   },

//   // **** DOM MANIPULATION ***
//   render: function(){
//     // Create element
//     let articleElem = document.createElement('article');
//     // Add to the DOM
//     kittenSection.appendChild(articleElem);

//     // h2
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name; // optional
//     articleElem.appendChild(h2Elem);

//     let pElem = document.createElement('p');
//     pElem.textContent = `${this.name} is adorable and is ${this.age}`;
//     articleElem.appendChild(pElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.interests.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = this.interests[i];
//       ulElem.appendChild(liElem);
//     }

//     let imgElem = document.createElement('img');
//     imgElem.src = this.photo;
//     imgElem.alt = `${this.name} is adorable and is ${this.age}`;
//     articleElem.appendChild(imgElem);
//   }
// };

// serena.getAge();
// serena.render();
