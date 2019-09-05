document.querySelector('#set-color').addEventListener('click', changeBrushBox);

function changeBrushBox (e) {
  e.preventDefault();
  let newColor = document.querySelector('#color-field').value;
  document.querySelector('.brush').style.backgroundColor = newColor;
}
