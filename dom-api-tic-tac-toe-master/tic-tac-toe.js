const currentPlayerSymbol = 'x';
const squareValues = ['','','','','','','','',''];


window.addEventListener('DOMContentloaded', event => {
document.getElementById('tic-tac-toe-board');
document.addEventListener('click', event => {
  const targetId = event.target.id;
  if (!targetId.startsWith('square-')) {
    return
  }
  const squareId = num.parseInt(targetId[targetId.length - 1]);

  if (squareValues[squareId] !== '') {
    return
  }
  const xImg = document.createEvent('img');
  xImg.src= 'dom-api-tic-tac-toe-master/t-t-t-pics/player-x.svg';
  event.target.appendChild(xImg);
  squareValues[squareId] = currentPlayerSymbol;
  
  if (currentPlayerSymbol === 'x') {
    currentPlayerSymbol = 'o';
  } else {
    currentPlayerSymbol = 'x';
  }
  
});









































});