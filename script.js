const container = document.querySelector(".container");
const size = document.querySelector(".size");

size?.addEventListener("click", () => {
  const choice = Number(prompt("Chose a number of square between 16 and 100"));
  const width = (600 - choice * 2) / choice;
  const height = (600 - choice * 2) / choice;
  const nbrSquare = choice * choice;
  container?.replaceChildren();
  for (let i = 0; i < nbrSquare; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "grid");
    newDiv.style.height = `${width}px`;
    newDiv.style.width = `${height}px`;
    container?.appendChild(newDiv);
  }
});

for (let i = 0; i < 256; i++) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "grid");
  container?.appendChild(newDiv);
}

const grid = document.querySelectorAll(".grid");
for (let i = 0; i < grid.length; i++) {
  grid[i].addEventListener("mouseover", () => {
    grid[i].setAttribute("style", "background: red;");
  });
}
