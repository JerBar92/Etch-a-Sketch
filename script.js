const container = document.querySelector(".container");
const size = document.querySelector(".size");

createGrid(16);

size?.addEventListener("click", () => {
  let size = Number(prompt("Chose a number of square not greater than 100"));
  if (size > 100) {
    prompt("The number cannot be greater than 100");
  }
  container?.replaceChildren();
  createGrid(size);
});

function createGrid(square) {
  let gridSize = square;
  let totalSize = gridSize * gridSize;
  let squareSize = 960 / gridSize;
  for (let i = 0; i < totalSize; i++) {
    let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "grid");
    newDiv.style.minHeight = `${squareSize}px`;
    newDiv.style.minWidth = `${squareSize}px`;
    container?.appendChild(newDiv);
    newDiv.addEventListener("mousedown", () => {
      newDiv.style.backgroundColor = `#${randomColor}`;
    });
    newDiv.addEventListener("mouseenter", (event) => {
      if (event.buttons == 1) {
        newDiv.style.backgroundColor = `#${randomColor}`;
      }
    });
  }
}
