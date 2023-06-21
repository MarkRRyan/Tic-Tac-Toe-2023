console.log('Hey stop looking at my console!')

const gameboard = document.getElementById('gameboard')
const boxes = Array.from(document.getElementsByClassName('box'))
const restartBTN = document.getElementById('restartBTN')
const playerText = document.getElementById('playText')
const spaces = []
const playerOne = 'X'
const playerTwo = 'O'
let currentPlayer = playerOne

const boxClicked = (event) => {
    const id = event.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        event.target.innerText = currentPlayer;
        if (hasPlayerWon(currentPlayer)) {
            playerText.innerHTML = `${currentPlayer} is the WINNER!!`
            return;
        }
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    }
}

const gameSquares = () => {
    boxes.forEach((box) => {
      box.addEventListener("click", boxClicked);
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

// Sidebar Javascript
const hamburgerMenu = document.querySelector('.hamburger-menu');
const sideMenu = document.querySelector('.side-menu');
const burger = document.querySelectorAll('.hamburger')
console.log(burger)

hamburgerMenu.addEventListener('click', function() {
  hamburgerMenu.classList.toggle('active');
  sideMenu.classList.toggle('active');
  // hamburgerMenu.style.display = 'none'
});

document.addEventListener('click', function(event) {
  const target = event.target;
  if (!target.closest('.side-menu-container')) {
    hamburgerMenu.classList.remove('active');
    sideMenu.classList.remove('active');
    // hamburgerMenu.style.display = 'block'
  }
});