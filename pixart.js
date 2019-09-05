/**
 * This event listener will call the function changeBrushBox
 * with 'click' and pressing the enter key.
 */
document.querySelector('#set-color').addEventListener('click', changeBrushBox);

/**
 * Changes the brush box background color
 * to whatever is in the input
 */
function changeBrushBox (e) {
  e.preventDefault();
  let newColor = document.querySelector('#color-field').value;
  document.querySelector('.brush').style.backgroundColor = newColor;
}

/**
 * Creates twenty divs with square class and appends each to body
 *
 */
function createTwentyDivs () {
  for (let i=0; i<20; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList = "square";
    document.querySelector('body').appendChild(newDiv);
  }
}

createTwentyDivs();

/**
 * Adds an event listener to each square div
 */

/*
function addEventListenerToSquares() {
  squareObj = document.getElementsByClassName('square');
  for (let i=0; i<squareObj.length; i++) {
    squareObj[i].addEventListener('click', setGreen);
  }
}
*/

/**
 * Changes selected element's background color to green
 */
/*
function setGreen() {
  this.style.backgroundColor = "green";
}

addEventListenerToSquares();
*/

function addEventListenerToSquares() {
  squareObj = document.getElementsByClassName('square');
  for (let i=0; i<squareObj.length; i++) {
    squareObj[i].addEventListener('click', setSelectedColor);
  }
}

function setSelectedColor() {
  let newColor = document.querySelector('#color-field').value;
  this.style.backgroundColor = newColor;
}

addEventListenerToSquares();
