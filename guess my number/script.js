'use strict';

/*console.log(document.querySelector('.message').textContent); // selecting class

document.querySelector('.message').textContent = 'correct number!';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.message').value);
*/

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
// 

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number❌';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number🎉🎈';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.background =
      " url('./kenny.jpeg')center";
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // guess is too high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high 💹';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // guess is too low
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'Too Low  〽';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

// reset code

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.background = '#000000';

  document.querySelector('.number').style.width = '15rem';
});
