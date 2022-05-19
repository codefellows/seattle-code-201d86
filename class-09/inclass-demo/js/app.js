'use strict';

// ****** WINDOW INTO THE DOM *******
let kittenSection = document.getElementById('kitten-profiles');

// GRAB THE ELEMENT TO LISTEN TO
let kittenForm = document.getElementById('my-form');

// ***** HELPER FUNCTION - GENERATE A RANDOM NUMBER *****
// got from mdn docs
function randomAge(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// array to store all my created kitten objects
let kittenCaboodle = [];

// ********** CONSTRUCTOR FUNCTION *************

function Kitten(name, interests, isGoodWithCats, isGoodWithDogs, isGoodWithKids, photo){
  this.name = name;
  this.interests = interests;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithKids = isGoodWithKids;
  this.photo = photo;
  this.age = 0;

  kittenCaboodle.push(this);
}

// ***** PROTOTYPE = INHERITS: EACH OBJECT WILL INHERIT THESE METHODS ******

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

  let tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let th1Elem = document.createElement('th');
  th1Elem.textContent = 'Good with Cats 😻';
  row1.appendChild(th1Elem);

  let th2Elem = document.createElement('th');
  th2Elem.textContent = 'Good with Dogs 🐶';
  row1.appendChild(th2Elem);

  let th3Elem = document.createElement('th');
  th3Elem.textContent = 'Good with Kids 👶🏼';
  row1.appendChild(th3Elem);

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

  for(let i = 0; i < kittenCaboodle.length; i++){
    kittenCaboodle[i].getAge();
    kittenCaboodle[i].render();
  }
}

renderAllKitties();

// ******* EVENT LISTENER DEMO ********

// STEP 3: DEFINE THE CALLBACK FUNCTION

function handleSubmit(event){
  event.preventDefault();

  let kittyName = event.target.kittyName.value;
  let interests = event.target.interests.value;
  interests = interests.split(','); //
  // playing,napping,eating  = ['playing', 'napping', 'eating']
  let photo = event.target.photo.value;

  let isGoodWithCats = event.target.isGoodWithCats.checked;
  let isGoodWithDogs = event.target.isGoodWithDogs.checked;
  let isGoodWithKids = event.target.isGoodWithKids.checked;

  let newKitten = new Kitten(kittyName, interests, isGoodWithCats, isGoodWithDogs, isGoodWithKids, photo);

  newKitten.getAge();
  newKitten.render();

  // remove the footer - then recreate it

  kittenForm.reset(); // reset form
}

// STEP 2: ATTACH THE LISTENER AND PASS IN THE TYPE OF EVENT, AND CALLBACK FUNCTION
kittenForm.addEventListener('submit', handleSubmit);
