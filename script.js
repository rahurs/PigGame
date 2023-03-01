'use strict';
// selecting elements
const btnroller = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
let playing = true;
const dice = document.querySelector('.dice');
const score0 = document.getElementById('score--0');
const score1 = document.querySelector('#score--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let scores = [0, 0];
let activePlayer = 0;

// setting scores to 0
score0.textContent = 0;
score1.textContent = 0;

let currentScore = 0;
//hidding dice from the page

dice.classList.add('hidden');
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  // document
  //   .querySelector(`.player--${activePlayer}`)
  //   .classList.add('player--active');

  // orr
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

btnroller.addEventListener('click', function () {
  if (playing) {
    //Generating a random

    let number = Math.trunc(Math.random() * 6 + 1);

    //remove the hidden dice class

    dice.classList.remove('hidden');
    console.log(number);
    //   display a dice
    dice.src = `dice-${number}.png`;
    // check for rolled 1 : if true switch to another player

    if (number === 1) {
      //   .querySelector(`.player--${activePlayer}`)
      //   .classList.remove('player--active');
      // or

      switchPlayer();
    } else {
      //add dice to the current score
      currentScore += number;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //   console.log(currentScore);
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    console.log(scores[activePlayer]);
    if (scores[activePlayer] < 10) switchPlayer();
    else {
      playing = false;
      dice.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');

  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');

  dice.classList.remove('hidden');
});
