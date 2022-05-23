'use strict';

console.log('hey there hey!');

// *********** GLOBAL VARIABLES ****************

let voteCount = 15;
let allGoats = [];

// ********** DOM REFERENCES *******************

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');

let showResultsBtn = document.getElementById('show-results-btn');
let resultsList = document.getElementById('results-list');

// ********** CONSTRUCTOR ********************

function Goat(name, fileExtension = 'jpg'){
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.photo = `img/${name}.${fileExtension}`;

  allGoats.push(this);

}

new Goat('bunny-goat', 'png');
new Goat('cool-goat');
new Goat('cruisin-goat');
new Goat('float-your-goat');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');

// ********** HELPER FUNCTIONS/EXECUTABLE CODE ********

// w3resources - Math.floor(Math.random()*items.length)
function getRandomIndex(){
  return Math.floor(Math.random()*allGoats.length);
}

function renderImgs(){

  let goatOneIndex = getRandomIndex();
  let goatTwoIndex = getRandomIndex();

  // need the validation to make sure they do not show up in the same round
  // NOTE: Your lab will require you to have 3 unique images per round
  // HINT: Consider using a container to store your random indexes and then validate if there are 3 unique numbers in that container
  while(goatOneIndex === goatTwoIndex){
    goatTwoIndex = getRandomIndex();
  }

  imgOne.src = allGoats[goatOneIndex].photo;
  imgOne.alt = allGoats[goatOneIndex].name;
  allGoats[goatOneIndex].views++;

  imgTwo.src = allGoats[goatTwoIndex].photo;
  imgTwo.alt = allGoats[goatTwoIndex].name;
  allGoats[goatTwoIndex].views++;
}

renderImgs();

// ********* EVENT HANDLERS *******************
function handleClick(event) {
  voteCount--;

  let imgClicked = event.target.alt;

  for(let i = 0; i < allGoats.length; i++){
    if(imgClicked === allGoats[i].name){
      allGoats[i].votes++;
    }
  }
  //rerender 2 new goat images
  renderImgs();

  // once voting rounds completed - stop clicks
  if(voteCount === 0){
    imgContainer.removeEventListener('click', handleClick);

  }

}

function handleShowResults(){
  if(voteCount === 0){
    for(let i = 0; i < allGoats.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${allGoats[i].name} was shown ${allGoats[i].views} times and voted for ${allGoats[i].votes} times.`;
      resultsList.appendChild(liElement);
    }
  }
}


// ********* EVENT LISTENERS ******************

imgContainer.addEventListener('click', handleClick);
showResultsBtn.addEventListener('click', handleShowResults);
