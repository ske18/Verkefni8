import { el } from "./helpers.js";
import { playAsText } from "./rock-paper-scissors.js";
/**
 * Býr til takka fyrir umferðir, festir `onClick` við og bætir
 * við `.rounds__buttons`.
 *
 * @param {number} max Hámark umferða
 * @param {function} onClick Fall sem keyra skal þegar ýtt er á takka
 */
 export function createButtons(max, onClick) {
   const a = document.querySelector('.rounds__buttons')
   for(let i=0;i<max;i+=2){
    const b = el('button', `${i+1}`);
    a.appendChild(b);
    b.addEventListener('click', onClick)
    }
  }
  
  export function show(part) {  
    // Element fyrir „parta“ leiks sem við viljum fela og sýna
    const start = document.querySelector('.start');
    const rounds = document.querySelector('.rounds');
    const play = document.querySelector('.play');
    const result = document.querySelector('.result');
  
    // Felum allt
    start.classList.add('hidden');
    rounds.classList.add('hidden');
    play.classList.add('hidden');
    result.classList.add('hidden');
  
    // og sýnum það sem beðið er um
    switch (part) {
      case 'start':
        start.classList.remove('hidden');
        break;
      case 'rounds':
        rounds.classList.remove('hidden');
        break;
      case 'play':
        play.classList.remove('hidden');
        break;
      case 'result':
        result.classList.remove('hidden');
        break;
      default:
        console.warn(`${part} óþekkt`);
    }
  
    // Halló debugger! Við getum sett þetta lykilorð til að láta debugger stoppa
    // þar sem við viljum í flæði forritanna okkar
    //debugger;
  }
  
  /**
   * @typedef {Object} Results
   * @property {string} player Það sem spilari spilaði
   * @property {string} computer Það sem tölva spilaði
   * @property {number} result Útkoma úr leik, `-1`, `0`, eða `1`
   * @property {number} currentRound Núverandi umferð
   * @property {number} totalRounds Heildarfjöldi umferð
   * @property {number} playerWins Sigrar spilara í umferð
   * @property {number} computerWins Sigrar tölvu í umferð
   */
  
  /**
   * Uppfærir öll gildi stöðu skjás innan `.result` áður en sýndur.
   * @param {Results} r Gildi fyrir skjá
   */
  export function updateResultScreen({ player, computer, result, currentRound, totalRounds, playerWins, computerWins }) {
  
    const resultPlayer = document.querySelector('.result__player');
    const resultComputer = document.querySelector('.result__computer');
    const resultText = document.querySelector('.result__result');
    const gameStatusText = document.querySelector('.result__status');
    const statusRoundElement = document.querySelector('.result__statusRound');
    const currentRoundElement = document.querySelector('.result__currentRound');
    const totalRoundsElement = document.querySelector('.result__totalRounds');
  
    resultPlayer.textContent = playAsText(player.toString()); //'spilari spilaði ...'
    resultComputer.textContent = playAsText(computer);

    currentRoundElement.textContent = currentRound;
    totalRoundsElement.textContent = totalRounds;
    console.log(result)
    resultText.textContent = result === 1 ? 'Þú sigrar.' : (result === -1 ? 'Tölva sigrar.' : 'Jafntefli');
    gameStatusText.textContent = `Staðan er ${playerWins}-${computerWins}.`;
  }
  