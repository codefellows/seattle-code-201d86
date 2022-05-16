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

console.log(kittenSection);

// ***** HELPER FUNCTION - GENERATE A RANDOM NUMBER *****
// got from mdn docs
function randomAge(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ******* OBJECTS LITERALS *******

let frankie = {
  name: 'Frankie',
  age: 0,
  interests: ['wet food', 'knocking stuff of counters', 'cat nip'],
  isGoodWithCats: true,
  isGoodWithDogs: false,
  isGoodWithKids: true,
  photo: 'img/frankie.jpeg',
  getAge: function(){
    this.age = `${randomAge(3,12)} months old`
  },

  // **** DOM MANIPULATION ***
  // kitties will render themselves and add their info via render method
  render: function(){
    // DOM Manipulation: Create element then give it context if needed
    let articleElem = document.createElement('article');
    // Append it to the DOM -> parentElem.appendChild(childElem);
    kittenSection.appendChild(articleElem);

    // creating the h2 element
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name; // context again is option in this case we are using the name of the kitty for the h2 element
    articleElem.appendChild(h2Elem); // article is the parent element for each kitty

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
  }
};

frankie.getAge();  // need to call this METHOD to generate age for frankie
frankie.render(); // need to call this METHOD to render all the HTML to the page


let jumper = {
  name: 'Jumper',
  age: 0,
  interests: ['dry food', 'plotting', 'fish cookies'],
  isGoodWithCats: true,
  isGoodWithDogs: true,
  isGoodWithKids: true,
  photo: 'img/jumper.jpeg',
  getAge: function(){
    this.age = `${randomAge(3,12)} months old`
  },

  // **** DOM MANIPULATION ***
  render: function(){
    // Create element
    let articleElem = document.createElement('article');
    // Add to the DOM
    kittenSection.appendChild(articleElem);

    // h2
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name; // optional
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
  }
};

jumper.getAge();
jumper.render();
