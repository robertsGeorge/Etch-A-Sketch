let buttonClear = document.getElementById("clear");
let gridContainer = document.querySelector(".grid-container");
let gridSquare;
let userSquares;
let totalNoSquares = 256;

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

function changeColor() {
  this.style.backgroundColor = "black";
}
function resetGrid() {
  for (let i = 0; i < allGridSquares.length; i++) {
    allGridSquares[i].style.backgroundColor = "white";
  }
  userSquares = +prompt("How many squares per side would you like the new grid to have?", "64");
  totalNoSquares = userSquares * userSquares;
  generateGrid();
}





generateGrid();

// change gridsquare color when mouse hovers over
let allGridSquares = document.querySelectorAll(".grid-container div");
for (let i = 0; i < allGridSquares.length; i++) {
  allGridSquares[i].addEventListener("mouseover", changeColor);
}

// change color of grid squares back to white
buttonClear.addEventListener("click", resetGrid);

