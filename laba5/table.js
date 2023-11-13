function getClassOnMouseOver(event) {
  const cellElement = event.target;
  const className = cellElement.className;
  const cellNumber = className.slice(4);

  setRandomColor(cellNumber);
}

function setRandomColor(cellNumber) {
  const cell = document.querySelector(`.cell${cellNumber}`);
  cell.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getClassOnClick(event) {
  const cellElement = event.target;
  const className = cellElement.className;
  const cellNumber = className.slice(4);

  setPaletteColor(cellNumber);
}

function setPaletteColor(cellNumber) {
  const cell = document.querySelector(`.cell${cellNumber}`);
  cell.style.backgroundColor = getPaletteColor();
}

function getPaletteColor() {
  const color = document.querySelector(".colorPalette").value;
  return color;
}

function getClassOnDblClick(event) {
  const clickedElement = event.target;
  const rowElement = clickedElement.parentNode;
  const rowNumber = rowElement.className.slice(3);
  setFixedColor(rowNumber);
}

function setFixedColor(rowNumber) {
  for (let i = Number(rowNumber); i < 6; i += 2) {
    for (let j = 0; j < 6; j++) {
      const cellNumber = i * 6 + j;
      const cell = document.querySelector(`.cell${cellNumber}`);
      cell.style.backgroundColor = "#d0a2f7";
    }
  }
}
