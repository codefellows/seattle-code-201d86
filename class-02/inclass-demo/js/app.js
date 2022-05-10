'use strict';

console.log('hey world hey!');

let answerOne = prompt('Do I have a daughter?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y'){
  alert('You are correct!');
} else if(answerOne === 'no' || answerOne === 'n'){
  alert('Sorry I do, she is crazy');
}

