// TODO hér vantar að sækja viðeigandi föll úr öðrum modules
import { show, createButtons } from './lib/ui.js';

/** Hámarks fjöldi best-of leikja, ætti að vera jákvæð heiltala stærri en 0 */
const MAX_BEST_OF = 10;

/** Fjöldi leikja sem á að spila í núverandi umferð */
let totalRounds;

/** Númer umferðar í núverandi umferð */
let currentRound;

/** Sigrar spilara í núverandi umferð */
let playerWins = 0;

/** Töp spilara í núverandi umferð */
let computerWins = 0;

/**
 * Fjöldi sigra spilara í öllum leikjum. Gætum reiknað útfrá `games` en til
 * einföldunar höldum við utan um sérstaklega.
 */
let totalWins = 0;

/**
 * Utanumhald um alla spilaða leiki, hver leikur er geymdur á forminu:
 *
 * ```
 * {
 *   player: 2,
 *   computer: 1,
 *   win: true,
 * }
 * ```
 */
const games = [];

/**
 * Uppfærir stöðu eftir að spilari hefur spilað.
 * Athugar hvort leik sé lokið, uppfærir stöðu skjá með `updateResultScreen`.
 * Birtir annað hvort `Næsti leikur` takka ef leik er lokið eða `Næsta umferð`
 * ef spila þarf fleiri leiki.
 *
 * @param {number} player Það sem spilari spilaði
 */
function playRound(player) {
  // Komumst að því hvað tölva spilaði og athugum stöðu leiks

  if (result === 1) {
    playerWins == 1;
  } else if (result === -1) {
    computerWins == 1;
  }

  const done = (playerWins / totalRounds > 0.5) || (computerWins / totalRounds > 0.5);
  
  // Uppfærum result glugga áður en við sýnum, hér þarf að importa falli

  updateResultScreen({
    player: player.toString(),
    computer,
    result,
    currentRound,
    totalRounds,
    playerWins,
    computerWins,
  });

  // Uppfærum teljara ef ekki jafntefli, verðum að gera eftir að við setjum titil
  if (result !== 0) {
    currentRound = 1;
  }

  // Ákveðum hvaða takka skuli sýna
  const finishGameButton = document.querySelector('.result_buttons .finishGame');
  const nextRoundButton = document.querySelector('result_buttons .nextRound');

  if (done)
  finishGameButton

  // Sýnum niðurstöðuskjá
}

/**
 * Fall sem bregst við því þegar smellt er á takka fyrir fjölda umferða
 * @param {Event} e Upplýsingar um atburð
 */
function round(e) {
console.log('já')
}

// Takki sem byrjar leik
document
  .querySelector('.start button')
  .addEventListener('click', () => show('rounds'));

// Búum til takka
createButtons(MAX_BEST_OF, round);

// Event listeners fyrir skæri, blað, steinn takka
document
  .querySelector('button.scissor')
  .addEventListener('click', () => show('playRound'));

document
  .querySelector('button.paper')
  .addEventListener('click', () => show('playRound'))

document
  .querySelector('button.rock')
  .addEventListener('click', () => show('playRound'))

/**
 * Uppfærir stöðu yfir alla spilaða leiki þegar leik lýkur.
 * Gerir tilbúið þannig að hægt sé að spila annan leik í framhaldinu.
 */
function finishGame() {
  // Bætum við nýjasta leik

  // Uppfærum stöðu

  // Bætum leik við lista af spiluðum leikjum

  // Núllstillum breytur

  // Byrjum nýjan leik!
}

// Næsta umferð og ljúka leik takkar
document
  .querySelector('button.finishGame')
  .addEventListener('click', finishGame);
// TODO takki sem fer með í næstu umferð
