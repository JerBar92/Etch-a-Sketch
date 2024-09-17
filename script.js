const container = document.querySelector(".container");

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
