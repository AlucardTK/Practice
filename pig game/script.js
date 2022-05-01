'use strict';

// selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;
// starting conditions

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  diceEL.classList.add('hidden');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // display dice functionality
    diceEL.classList.remove('hidden');

    diceEL.src = `dice-${dice}.png`;
    // check for rolled 1 id true switch to next player
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      current0EL.textContent = currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to ative players score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentscore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // check if score is >= 100
    if (scores[activePlayer] >= 100) {
      // finish game functionality
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

/*btnNew.addEventListener('click', function () {
  const score0EL = (document.querySelector('#score--0').textContent = 0);
  const score1EL = (document.getElementById('score--1').textContent = 0);
  const current0EL = (document.getElementById('current--0').textContent = 0);
  const current1EL = (document.getElementById('current--1').textContent = 0);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
});
*/

btnNew.addEventListener('click', init);

// linear-gradient(to top left, #753682 0%, #bf2e34 100%)
