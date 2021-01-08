const currentPlayerSymbol = 'x';
const squareValues = ['','','','','','','','',''];
const gameStatus = '';

const gameChecker = 

function checkGameStatus()  {
    
}

window.addEventListener('DOMContentloaded', event => {

document
.getElementById('tic-tac-toe-board')
.addEventListener('click', event => {
    console.log('I am clicked');
  const targetId = event.target.id;
  if (!targetId.startsWith('square-')) {
    return
  }
  const squareId = Number.parseInt(targetId[targetId.length - 1]);

  if (squareValues[squareId] !== '') return;
  
  const xImg = document.createElement('img');
  xImg.src= 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg';
  event.target.appendChild(xImg);
  squareValues[squareId] = currentPlayerSymbol;
  
  if (currentPlayerSymbol === 'x') {
    currentPlayerSymbol = 'o';
  } else {
    currentPlayerSymbol = 'x';
  }
  
});









































});