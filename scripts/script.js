console.log("Etch-a-Sketch");
let canvas = document.querySelector(".canvas");
let width = canvas.offsetWidth;
let gridColor = document.querySelector(`input[name="grid"]`);

let n = parseInt(prompt("Enter the Size of Grid", 16));

for (let i = 0; i < (n * n); i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.width = (width / n) + "px";
    grid.style.height = (width / n) + "px";
    // grid.style.border = 1 + "px black solid";
    grid.style.backgroundColor = "yellow";
    canvas.appendChild(grid);
}