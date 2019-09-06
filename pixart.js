/** part 1, part 2
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

/** part 3 I would do createDivs(20);
 * Creates divs with square class and appends each to body
 * @param  {integer} [how many divs you want]
 */
function createDivs(num) {
  for (let i=0; i<num; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList = "square";
    document.querySelector('body').appendChild(newDiv);
  }
}


/** part 4
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

// Part 5
/*
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
*/

// part 6
createDivs(8000);

function addEventListenerToSquares() {
  squareObj = document.getElementsByClassName('square');
  for (let i=0; i<squareObj.length; i++) {
    squareObj[i].addEventListener('mouseover', setSelectedColor);
  }
}

function setSelectedColor() {
  let newColor = document.querySelector('#color-field').value;
  this.style.backgroundColor = newColor;
}

addEventListenerToSquares();

/******************************************************************
                              BONUS
*******************************************************************/
/**
 * Makes a separate div to append to controls div.
 * This will be where the swatches are
 *
 */
function makeColorPalette () {
  let colorPalette = document.createElement('div');
  colorPalette.classList = "color-palette";
  colorPalette.style.marginBottom = "15px";
  document.querySelector('.controls').append(colorPalette);
}

/**
 * Makes three div (swatches) to be appended to the color palette
 *
 */
function makeColorSwatch () {
  for (let i=1; i<4; i++) {
  let newDiv = document.createElement('div');
  newDiv.classList = `div-${i} color-swatch`;
  newDiv.style.height = "33px";
  newDiv.style.width = "33px";
  newDiv.style.display ="inline-block";
  newDiv.style.border = `1px solid white`;
  newDiv.style.margin = '4px';
  document.querySelector('.color-palette').appendChild(newDiv);
  }
}

makeColorPalette();
makeColorSwatch();

let usedColors = ["transparent", "transparent", "transparent"];
document.querySelector('#set-color').addEventListener('click', setPaletteColor);

function setPaletteColor (e) {
  e.preventDefault();
  let colorAdded = document.querySelector('#color-field').value;
  usedColors.unshift(colorAdded);
  usedColors.pop();

  let swatch1 = document.querySelectorAll(".color-swatch")[0];
  let swatch2 = document.querySelectorAll(".color-swatch")[1];
  let swatch3 = document.querySelectorAll(".color-swatch")[2];

  swatch1.style.backgroundColor = usedColors[0];
  swatch2.style.backgroundColor = usedColors[1];
  swatch3.style.backgroundColor = usedColors[2];

}

for (let k=0; k<3; k++) {
  let myColor = document.querySelectorAll(".color-swatch")[k];
  myColor.addEventListener('click', brushPreview);
}

/**
 * this will change the text of color field to background color of element
 * thereby changing the color of brush preview
 *
 */

function brushPreview(e) {
  e.preventDefault();

  let previewColor = document.getElementById('color-field');
  previewColor.value = this.style.backgroundColor;

  let brush = document.querySelector('.brush');
  brush.style.background = previewColor.value;
}
