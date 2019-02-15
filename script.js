let gridContainer = document.querySelector(".grid-container");
let gridSquare;

for (let i = 1; i <= 256; i++) {
  gridSquare = document.createElement("div");
  gridContainer.appendChild(gridSquare);
}

allGridSquares = document.querySelectorAll(".grid-container div");

for (let i = 0; i < allGridSquares.length; i++) {
  allGridSquares[i].addEventListener("mouseover", changeColor);
}

function changeColor() {
  this.style.backgroundColor = "black";
}

