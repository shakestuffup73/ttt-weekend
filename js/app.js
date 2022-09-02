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

const squareEls = document.querySelectorAll('section > div');

const messageEl = document.getElementById('message');


// /*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square) => {
  square.addEventListener('click', handleClick);
});

// /*-------------------------------- Functions --------------------------------*/

init();

function init (){
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
    messageEl.innerText = `Next player's turn`
  }
  else if (winner) {
    messageEl.innerText =  `Congrats message`
  }
  else {
    messageEl.innerText =  `It's a tie`
  }
}

function handleClick(event) {
  // console.log(event.target);
  let sqIdx = parseInt(event.target.id.replace('sq', ''));
  console.log(sqIdx);

  if ((board[sqIdx]) || (winner)) {
    return `Game over!`
  }
  board[sqIdx] = turn;
  turn *= -1;
  
  let winner

  if (winner) {
    getWinner();
  }
}

function getWinner() {
  let total = 0;
  // loop through each of the winning combination arrays defined in the winningCombos array
  for (let i = 0; i < winningCombos.length; i++) {
    //total up the three board positions using the three indices in the current combo (convert to positive)
    total = (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]));
    
    console.log('total is: ', total)
    
    if (total === 3) {
      return winner = board[winningCombos[i][1]];
    }

    console.log('winner index is: ', winner)
  }
    // if total equals 3, we have a winner!

    // set the winner variable to the board's value at the index specified by the first index of that winning combination's array
}
getWinner();

// Step 1 - Define the required variables used to track the state of the game

//   1a) Use a variable named `board` to represent the state of the squares on
//      the board.

//   1b) Use a variable named `turn` to track whose turn it is.

//   1c) Use a variable named `winner` to represent if anyone has won yet, or 
//      if a tie has occurred.

// Step 2 - Store cached element references

//   2a) In a constant called `squareEls`, store the nine elements 
//      representing the squares on the page.

//   2b) In a constant called `messageEl`, store the element that displays the 
//      game's status on the page.


// Step 3 - Upon loading, the game state should be initialized, and a function 
//          should be called to render this game state

//   3a) Create a function called `init`.

  // 3b) Call this `init` function when the app loads.

  // 3c) Set the `board` variable to an array containing nine `null`s to 
  //    represent empty squares.

  // 3d) Set the `turn` to `1` - which will represent player X.

  // 3e) Set the `winner` to `null`.

  // 3f) Call a function called `render` at the end of the `init` function.

// Step 4 - The state of the game should be rendered to the user

  // 4a) Create a function called `render`.

  // 4b) Loop over `board` and for each element:
  //     - Use the current index of the iteration to access the corresponding 
  //       square in the `squareEls` array.
  //     - Style that square however you wish, dependent on the value  
  //       contained in the current cell being iterated over (`-1`, `1`, or
  //       `null`).  
  
  // 4c) Render a message based on the current game state:
  //     - If winner has a value of `null` (meaning the game is still in
  //       progress), render whose turn it is.
  //     - If `winner` is equal to `'T'` (tie), render a tie message.
  //     - Otherwise, render a congratulatory message to the player that has 
  //       won.
    

// Step 5 - Define the required constants

  // 5a) In a constant called `winningCombos` define the eight possible winning 
  //     combinations as an array of arrays.

// Step 6 - Handle a player clicking a square with a `handleClick` function

  // 6a) Create a function called `handleClick`. It will have an `evt`
  //     parameter.

  // 6b) Attach an event listener to the game board. On the `'click'` event, it 
  //     should call the `handleClick` function you created in 6a.

  // 6c) Obtain the index of the square that was clicked by "extracting" the 
  //     index from an `id` assigned to the element in the HTML. Assign this  
  //     to a constant called `sqIdx`.

  // 6d) If the `board` has a value at the `sqIdx`, immediately `return`  
  //     because that square is already taken. Also, if `winner` is not `null`
  //     immediately `return` because the game is over.

  // 6e) Update the `board` array at the `sqIdx` with the current value of
  //     `turn`.

  // 6f) Change the turn by multiplying `turn` by `-1` (this flips a `1` to
  //     `-1`, and vice-versa).

  // 6g) Set the `winner` variable if there's a winner by calling a new 
  //     function: `getWinner`.

  // 6h) All the state has been updated so we need to render our updated state 
  //     to the user by calling the `render` function we wrote earlier.

// Step 7 - Build the `getWinner` function

  // 7a) Create a function called `getWinner`

  /* 
   * There are two methods you can use to find out if there is a winner.
   *
   * Step b1 below is a more elegant method that takes advantage of the
   * `winningCombos` array you wrote above in step 5. 
   *
   * Step b2 might be a little simpler to comprehend, but you'll need to write  
   * more code. Step b2 also won't take advantage of the `winningCombos`
   * array, but using it as a reference will help you build a solution.
   * ***Ensure you choose only one path.***
   */

  // 7b1)Loop through each of the winning combination arrays defined in the 
  //     `winningCombos` array. Total up the three board positions using the 
  //     three indexes in the current combo. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at
  //     the index specified by the first index of that winning combination's
  //     array by returning that value.

  // 7b2)For each one of the winning combinations you wrote in step 5, find the
  //     total of each winning combination. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at 
  //     the index specified by the first index of that winning combination's 
  //     array by returning that value.

// 7c) If there is no winner, check to see if there is a tie. Set the  
  //     `winner` variable to `'T'` if there are no more nulls in the board  
  //     array byreturning the string `'T'`.

  // 7d) If there is no winner and there isn’t a tie, return `null`.

// Step 8 - Create Reset functionality

  // 8a) Add a reset button to the HTML document.

  // 8b) Store the new reset button element in a constant named `resetBtnEl`.

  // 8c) Attach an event listener to the `resetBtnEl`. On the `'click'` event 
  //     it should call the `init` function you created in 3.