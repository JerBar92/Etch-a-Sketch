const container = document.querySelector(".container");
const size = document.querySelector(".size");

createGrid(16);

size?.addEventListener("click", () => {
  let size = Number(prompt("Chose a number of square between 16 and 100"));
  if (size > 100) {
    prompt("The number cannot be greater than 100");
  }
  container?.replaceChildren();
  createGrid(size);
});

function createGrid(square) {
  let gridSize = square;
  let totalSize = gridSize * gridSize;
  let width = (600 - gridSize * 2) / gridSize;
  let height = (600 - gridSize * 2) / gridSize;
  for (let i = 0; i < totalSize; i++) {
    let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "grid");
    newDiv.style.minHeight = `${width}px`;
    newDiv.style.minWidth = `${height}px`;
    container?.appendChild(newDiv);
    newDiv.addEventListener("mouseover", () => {
      newDiv.style.backgroundColor = `#${randomColor}`;
    });
  }
}
