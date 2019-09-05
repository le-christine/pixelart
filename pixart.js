/**
 * This event listener will call the function changeBrushBox
 * with 'click' and pressing the enter key.
 */
document.querySelector('#set-color').addEventListener('click', changeBrushBox);

/**
 * This function changes the brush box background color
 * to whatever is in the input
 */
function changeBrushBox (e) {
  e.preventDefault();
  let newColor = document.querySelector('#color-field').value;
  document.querySelector('.brush').style.backgroundColor = newColor;
}
