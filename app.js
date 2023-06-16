console.log('Hey stop looking at my console!')

const gameboard = document.getElementById('gameboard')
const boxes = Array.from(document.getElementsByClassName('box'))
const restartBTN = document.getElementById('restartBTN')
const playerText = document.getElementById('playText')
const spaces = []
const playerOne = 'X'
const playerTwo = 'O'
let currentPlayer = playerOne
console.log(spaces)

const boxClicked = (event) => {
    const id = event.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        event.target.innerText = currentPlayer;
        if (hasPlayerWon(currentPlayer)) {
            playerText.innerHTML = `${currentPlayer} is the Winner!`
            return;
        }
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    }
}

const gameSquares = () => {
    boxes.forEach((box) => {
      box.addEventListener("click", boxClicked);
      console.log(box)
    });
  };

const hasPlayerWon = (player) => {
    if (spaces[0] === player) {
      if (spaces[1] === player && spaces[2] === player) {
        return true;
        
      }
      if (spaces[3] === player && spaces[6] === player) {
        return true;
      }
      if (spaces[4] === player && spaces[8] === player) {
        return true;
      }
    }
    if (spaces[8] === player) {
      if (spaces[2] === player && spaces[5] === player) {
        return true;
      }
      if (spaces[7] === player && spaces[6] === player) {
        return true;
      }
    }
    if (spaces[4] === player) {
      if (spaces[3] === player && spaces[5] === player) {
        return true;
      }
      if (spaces[1] === player && spaces[7] === player) {
        return true;
      }
      if (spaces[2] === player && spaces[6] === player) {
          return true;
      }
    }
  };

restartBTN.addEventListener("click", () => {
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });
  playerText.innerHTML = `Tic Tac Toe`;

  currentPlayer = playerOne;
});

gameSquares();