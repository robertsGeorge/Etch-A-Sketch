let buttonClear = document.getElementById("clear");
let gridContainer = document.querySelector(".grid-container");
let gridSquare;
let userSquares;
let totalNoSquares = 256;
let allGridSquares;
let newFlexBasis;

function generateGrid() {
  for (let i = 1; i <= totalNoSquares; i++) {
    gridSquare = document.createElement("div");
    gridContainer.appendChild(gridSquare);
  }
}
function removeOldSquares() {
  while ( gridContainer.hasChildNodes() ) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}
function addMouseoverEvent() {
  allGridSquares = document.querySelectorAll(".grid-container div");
  for (let i = 0; i < allGridSquares.length; i++) {
    allGridSquares[i].addEventListener("mouseover", changeColor);
  }
}
function changeColor() {
  this.style.backgroundColor = "black";
}
function resetFlexBasis() {
  newFlexBasis = 500 / userSquares + "px";
  for (let i = 0; i < allGridSquares.length; i++) {
    allGridSquares[i].style.flexBasis = newFlexBasis;
  }
}
function resetGrid() {
  for (let i = 0; i < allGridSquares.length; i++) {
    allGridSquares[i].style.backgroundColor = "white";
  }
  userSquares = +prompt("How many squares *per side* would you like?", "64");
  if (userSquares == 0) userSquares = 16;
  console.log(userSquares);
  totalNoSquares = userSquares * userSquares;
  removeOldSquares();
  generateGrid();
  addMouseoverEvent();
  resetFlexBasis();
}


generateGrid();
addMouseoverEvent();
buttonClear.addEventListener("click", resetGrid);

