let currentPlayerSymbol = 'x';
let squareValues = ['','','','','','','','',''];
const gameStatus = '';

const gameChecker = 

function checkGameStatus()  {
    
}

window.addEventListener('DOMContentLoaded', () => {

document
.getElementById('tic-tac-toe')
.addEventListener('click', event => {
  if (event.target.id.startsWith('square-')) {
    console.log('I am clicked', event.target.id);
  }
  
  const targetId = event.target.id;
  if (!targetId.startsWith('square-')) {
    return
  }
  const squareId = Number.parseInt(targetId[targetId.length - 1]);

  if (squareValues[squareId] !== '') return;
  
  const xImg = document.createElement('img');
  xImg.src= `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${currentPlayerSymbol}.svg`;
  event.target.appendChild(xImg);
  squareValues[squareId] = currentPlayerSymbol;
  
  if (currentPlayerSymbol === 'x') {
    currentPlayerSymbol = 'o';
    console.log("can you see me");
  } else {
    currentPlayerSymbol = 'x';
  }
  
});


});