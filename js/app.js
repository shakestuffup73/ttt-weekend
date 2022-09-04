/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
];



/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.square');
const messageEl = document.getElementById('message');
const resetBtnEl = document.getElementById('reset-button');
const surpriseMeow = document.getElementById('meow');
const meowSong = new Audio("../audio/carriedaway.mp3");

// /*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square) => {
  square.addEventListener('click', handleClick);
});

resetBtnEl.addEventListener('click', resetGame);


// /*-------------------------------- Functions --------------------------------*/

messageEl.innerText = 'Start Game';

init();


function init() {
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1; // represents player X
  winner = null;

  render();
  // console.log('sanity check')
}

function render() {

  board.forEach((square, idx) => {
    squareEls[idx].innerHTML = square;

    if (square === null) {
      squareEls[idx].innerText = ''
    }
    if (square === 1) {
      squareEls[idx].innerText = 'X'
    }
    if (square === -1) {
      squareEls[idx].innerText = 'O'
    }
  })

  if (!winner) {
    messageEl.innerText = `Your turn player ${turn === 1 ? 'X' : 'O'}`
  }
  else if (winner === 'T') {
    messageEl.innerText = `Tie game!`
  }
  else {
    messageEl.innerText = `Game over! Congrats on the win, ${winner === 1 ? 'X' : 'O'}`
    surpriseMeow.style = '';
    meowAppears();
    confetti.start(2000);
  }
}

function handleClick(event) {
  // console.log(event.target);
  let sqIdx = parseInt(event.target.id.replace('sq', ''));

  board[sqIdx] = turn
  turn *= -1

  winner = getWinner();

  render();
}

function getWinner() {
  // loop through each of the winning combination arrays defined in the winningCombos array
  for (let i = 0; i < winningCombos.length; i++) {
    //total up the three board positions using the three indices in the current combo (convert to positive)
    if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3)

      return board[winningCombos[i][0]]
  }

  if (board.includes(null)) {
    return null;
  }
  else {
    return 'T';
  }
}

function meowAppears() {
  surpriseMeow.style = "position: absolute; width: 50%; height: 50%; left: 0px; bottom: 0px; border: 0;";
  if (typeof meowSong.loop === 'boolean') {
    meowSong.loop = true;
    meowSong.volume = .2;
    meowSong.play()
  }
}

function resetGame() {
  init();
  messageEl.innerText = 'Start Game, Player X'
  surpriseMeow.style = "position: absolute; width: 0%; height: 0%; border: 0;";
  meowSong.pause();
}