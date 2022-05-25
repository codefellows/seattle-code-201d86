'use strict';

console.log('hey there hey!');

// LOCAL STORAGE STARTS ON LINE 226 AND CONTINUES ON LINE 36

// *********** GLOBAL VARIABLES ****************

let voteCount = 15;
let allGoats = [];

// ********** DOM REFERENCES *******************

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');

let showResultsBtn = document.getElementById('show-results-btn');
// let resultsList = document.getElementById('results-list');

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

// ************ LOCAL STORAGE PART 2 ***********

// STEP 3: GET IT OUT OF LOCAL STORAGE

let retreivedGoats = localStorage.getItem('goats');
console.log('Retreived Goats', retreivedGoats);

// STEP 4: PARSE DATA FOR OUR CODE TO REUSE

let parsedGoats = JSON.parse(retreivedGoats);
console.log('Parsed >>>>', parsedGoats);


// ****** USING THE PARSED ARRAY - LAB RELATED *******
if(retreivedGoats){
  allGoats = parsedGoats;
} else{
  new Goat('bunny-goat', 'png');
  new Goat('cool-goat');
  new Goat('cruisin-goat');
  new Goat('float-your-goat');
  new Goat('goat-out-of-hand');
  new Goat('kissing-goat');
  new Goat('sassy-goat');
  new Goat('smiling-goat');
  new Goat('sweater-goat');
}

// ******* running it back through our constructor ******

// if (retreivedGoats) {
//   for (let i = 0; i < parsedGoats.length; i++) {
//     if (parsedGoats[i].name === 'bunny-goat') {
//       let reconstructedBunnyG = new Goat('bunny-goat', 'png');
//       reconstructedBunnyG.views = parsedGoats[i].views;
//       reconstructedBunnyG.votes = parsedGoats[i].votes;
//     } else {
//       let reconstructedGoat = new Goat(parsedGoats[i].name);
//       reconstructedGoat.views = parsedGoats[i].views;
//       reconstructedGoat.votes = parsedGoats[i].votes;
//     }
//   }

// } else {
//   new Goat('bunny-goat', 'png');
//   new Goat('cool-goat');
//   new Goat('cruisin-goat');
//   new Goat('float-your-goat');
//   new Goat('goat-out-of-hand');
//   new Goat('kissing-goat');
//   new Goat('sassy-goat');
//   new Goat('smiling-goat');
//   new Goat('sweater-goat');
// }



console.log('RECONSTRUCTED GOATS >> ', allGoats);
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

    // ******** LOCAL STORAGE BEGINS ************

    // STEP 1: STRINGIFY DATA
    let stringifiedGoats = JSON.stringify(allGoats);

    console.log(stringifiedGoats);

    // STEP 2: ADD TO LOCAL STORAGE
    localStorage.setItem('goats', stringifiedGoats);
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
