let currentPlayerSymbol = 'x';
let squareValues = ['','','','','','','','',''];
const gameStatus = '';

const gameChecker = 

function checkGameStatus()  {
    //Row Check
    for (let i = 0; i < 9; i++) {
      if (squareValues[i] !== '' 
      && squareValues[i] === squareValues[i + 1] 
      && squareValues[i] === squareValues[i + 2]) {  
      gameStatus = squareValues[i].toUpperCase();

      }   
    }
    //Column Check
    for (let i = 0; i < 3; i++) {
      if (squareValues[i] !== '' 
      && squareValues[i] === squareValues[i + 3] 
      && squareValues[i] === squareValues[i + 6]) {
        gameStatus = squareValues[i].toUpperCase();
      }
      if (squareValues[0] !== '' 
      && squareValues[0] === squareValues[4] 
      && squareValues[0] === squareValues[8]) {
        gameStatus = squareValues[0].toUpperCase();
      } 
}
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