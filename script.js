let winMsg = "Victory";
let loseMsg = "Crushing Defeat";
let tieMsg = "Tie";
let moveList = ["Rock", "Paper", "Scissors"];

let statusDisplay = document.querySelector("#status-head");
// querySelector allows elements to be selected using CSS selectors.

let moveDisplays = document.querySelectorAll(".move-display h2");
let buttons = document.querySelectorAll("button");
// if we want to access multiple elements matching a criteria, we can use querySelectorAll()

/**
 * Computes result of the game. returns victory message if move 1 wins.
 * @param  {Number}   move1  move 1
 * @param  {Number}   move2  move 2
 * @return {String}   result result of the game
 */

function calcResult(move1, move2) {
  var result = move1 - move2;

  if (result == 1 || result + 3 == 1) {
    return winMsg;
  } else if (result == 2 || result + 3 == 2) {
    return loseMsg;
  }else{
    return tieMsg;
  }
}

/**
 * @return {Number}   random number between 0 and 2
 */

function randomMove() {
  return Math.floor(Math.random() * 3);
}

function startGame() {
  // display start of the Game
  statusDisplay.textContent = "Choose!";
  buttons.forEach((button, index) => {
    button.textContent = moveList[index];
    button.style.display = "inline-block";
    
    buttons[index].removeEventListener("click", startGame)
    buttons[index].addEventListener("click", endGame);
  });

  moveDisplays.forEach((moveDisplay) => (moveDisplay.style.display = "none"));
}

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].textContent = moveList[i];
//     buttons[i].style.display = "inline-block";
//   }

function endGame(event) {
  // display end state of the Game
  let playerMove = moveList.indexOf(event.target.textContent);
  let computerMove = randomMove();

  statusDisplay.textContent = calcResult(playerMove, computerMove);

  moveDisplays.forEach(
    (moveDisplay) => (moveDisplay.style.display = "inline-block")
  );
  moveDisplays[0].textContent = `You played ${moveList[playerMove]}`;
  moveDisplays[1].textContent = `Computer played ${moveList[computerMove]}`;

  buttons.forEach((button, index) => {
    if (index == 1) {
      button.textContent = "Play again";
      button.removeEventListener("click", endGame);
      button.addEventListener("click", startGame);
    } else {
      button.style.display = "none";
    }
  });
}
// @param {Event} event containing information of users input.

startGame();
