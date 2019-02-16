function changeColor() {
  this.style.backgroundColor = "black";
}
function revertColor() {
  for (let i = 0; i < allGridSquares.length; i++) {
    allGridSquares[i].style.backgroundColor = "white";
  }
}

let buttonClear = document.getElementById("clear");
let gridContainer = document.querySelector(".grid-container");
let gridSquare;

// generate grid within container
for (let i = 1; i <= 256; i++) {
  gridSquare = document.createElement("div");
  gridContainer.appendChild(gridSquare);
}

// change gridsquare color when mouse hovers over
let allGridSquares = document.querySelectorAll(".grid-container div");
for (let i = 0; i < allGridSquares.length; i++) {
  allGridSquares[i].addEventListener("mouseover", changeColor);
}

// change color of grid squares back to white
buttonClear.addEventListener("click", revertColor);

