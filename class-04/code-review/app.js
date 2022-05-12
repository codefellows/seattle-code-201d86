'use strict';

let score = 0;
// 6th Q -
// guessing game that takes in a numeric input by prompting the user to guess a number.
let myNum = 30;
// alert if they correct
// Indicates through an alert if the guess is “too high”

// alert if too low”.
function q6(){
  for(let i = 0; i < 4; i++){
    let userGuess = +prompt('What number am I thinking of?');
    if(myNum === userGuess){
      alert('You are correct!');
      score++;
      i = 4;
      // break;
    } else if(userGuess > myNum){
      alert('Sorry too high');
    } else if(userGuess < myNum){
      alert('Sorry too low');
    }

    if(i === 3){
      alert('sorry out of guesses answer was 30');
    }

  }

}

q6();
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.


// 7th Q -
// multiple possible correct answers that are stored in an array.
let favBoyBands = ['backstreet boys', 'take that', 'one direction', 'bts'];

// Give the user 6 attempts to guess the correct answer.

for(let i = 0; i < 6; i++){  // slow loop - counter 6 attempts  i = 0
  let boyBandGuess = prompt('Guess one of my fave boybands').toLowerCase();
  // boyBandGuess = bts
  for(let j = 0; j < favBoyBands.length; j++){  // fast loop j = 3
   if(boyBandGuess === favBoyBands[j]){
     alert('OMG I TOTALLY LOVE THEM!');
     score++;
     i = 6;
     break;
   }
  }
}

alert(`Here are my fav boy bands ${favBoyBands}`);

alert(`Your score was ${score} out of 2`);
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.
