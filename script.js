let buttonClear = document.getElementById("reset");
let gridContainer = document.querySelector(".grid-container");
let gridSquare;
let userSquares;
let totalNoSquares = 2500;
let allGridSquares;
let newFlexBasis; 
/* 
initial flex-basis value for grid square divs is set in style.css as
500px (the size of the grid container) divided by the number of 
initial squares per side (calculated as square root of 2500, which is 50)
resulting in a value of 10px (500 / 50).
*/

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
  userSquares = +prompt("How many grid squares *per side* would you like?\n\n(minimum 8, maximum 100)", "100");
  if (userSquares == 0) {
    userSquares = 50;
  } else if (userSquares > 100) {
      userSquares = 100;
    } else if (userSquares < 8) {
      userSquares = 8;
      }
  totalNoSquares = userSquares * userSquares;
  removeOldSquares();
  generateGrid();
  addMouseoverEvent();
  resetFlexBasis();
}

generateGrid();
addMouseoverEvent();
buttonClear.addEventListener("click", resetGrid);

