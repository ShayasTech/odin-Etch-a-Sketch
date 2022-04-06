console.log("Etch-a-Sketch");
let container = document.querySelector(".container");
let width = container.offsetWidth;
let opacity = 0;

let reload = document.querySelector("button");
reload.addEventListener("click", () => {
    location.reload();
});

function gridSize() {
    let n = parseInt(prompt("Enter the Size of Grid (N X N)", 16));
    if (n > 100) {
        gridSize();
    } else {
        return n;
    }
}

let n = gridSize();
for (let i = 0; i < (n * n); i++) {
    let grid = document.createElement("div");
    grid.style.width = (width / n) + "px";
    grid.style.height = (width / n) + "px";
    grid.style.border = "1px solid rgba(0,0,0,0.1)";
    grid.classList.add("grid");
    container.appendChild(grid);
}

let grids = document.querySelectorAll(".grid");

// // Hovering Effect BLACK BACKGROUND
// grids.forEach(grid => {
//     grid.addEventListener("mouseover", () => {
//         grid.style.backgroundColor = "black";
//     });
//     grid.addEventListener("mouseleave", () => {
//         grid.style.backgroundColor = "white";
//     });
// });


// // Hovering Effect RANDOM COLOR BACKGROUND
// function randomRBG() {
//     return Math.floor(Math.random() * 256);
// }

// grids.forEach(grid => {
//     grid.addEventListener("mouseover", () => {
//         grid.style.backgroundColor = `rgb(${randomRBG()},${randomRBG()},${randomRBG()})`;
//     });
//     grid.addEventListener("mouseleave", () => {
//         grid.style.backgroundColor = "white";
//     })
// })


// Hover to add opacity 10% on each pass
grids.forEach(grid => {
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = `black`;
        grid.style.opacity = (parseFloat(grid.style.opacity) || 0) + 0.1;
    });
});