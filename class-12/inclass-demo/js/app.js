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

// ********** CANVAS REFERENCE ***************
let ctx = document.getElementById('my-chart').getContext('2d');

// ********** CONSTRUCTOR ********************

function Goat(name, fileExtension = 'jpg') {
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
function getRandomIndex() {
  return Math.floor(Math.random() * allGoats.length);
}

function renderImgs() {

  let goatOneIndex = getRandomIndex();
  let goatTwoIndex = getRandomIndex();

  // need the validation to make sure they do not show up in the same round
  // NOTE: Your lab will require you to have 3 unique images per round
  // HINT: Consider using a container to store your random indexes and then validate if there are 3 unique numbers in that container
  while (goatOneIndex === goatTwoIndex) {
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

// ******** FUNCTION TO RENDER CHART ***********

function renderChart() {
  let goatNames = [];
  let goatVotes = [];
  let goatViews = [];

  for (let i = 0; i < allGoats.length; i++) {
    goatNames.push(allGoats[i].name);
    goatVotes.push(allGoats[i].votes);
    goatViews.push(allGoats[i].views);
  }


  let myChartObj = {
    type: 'bar',
    data: {
      labels: goatNames,
      datasets: [{
        label: '# of Votes',
        data: goatVotes,
        backgroundColor: [
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderColor: [
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: goatViews,
        backgroundColor: [
          '#ff0000',
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderColor: [
          '#ff0000',
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  new Chart(ctx, myChartObj);

}

// ********* EVENT HANDLERS *******************
function handleClick(event) {
  voteCount--;

  let imgClicked = event.target.alt;

  for (let i = 0; i < allGoats.length; i++) {
    if (imgClicked === allGoats[i].name) {
      allGoats[i].votes++;
    }
  }
  //rerender 2 new goat images
  renderImgs();

  // once voting rounds completed - stop clicks
  if (voteCount === 0) {
    imgContainer.removeEventListener('click', handleClick);
    // IF YOU CHOOSE TO REMOVE BUTTON, RENDER CHART AFTER CLICKS ARE DONE
    // renderChart();

  }

}

function handleShowResults() {
  if (voteCount === 0) {
    // click results button to call chart function
    renderChart();
    showResultsBtn.removeEventListener('click', handleShowResults);
  }
}


// ********* EVENT LISTENERS ******************

imgContainer.addEventListener('click', handleClick);
showResultsBtn.addEventListener('click', handleShowResults);
