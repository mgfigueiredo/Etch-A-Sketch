

const container = document.querySelector(".tester");

// function to change the number of squares in the grid
function numSquares(){
    var numSquares = prompt("How many rows/columns would you like?");
    console.log(numSquares);
    return numSquares;
    
}

function getSize(){
    let gridSize = prompt("How big do you want the canvas to be (in px)?");
    return gridSize;
}

// function to change the square size
function squareSize(numSquares, gridSize){
    let squareSize = gridSize/numSquares;
    return squareSize;
}

// function to create the grid
function createGrid(numSquares, squareSize){
    document.documentElement.style.setProperty(`--rowNum`, numSquares);
    document.documentElement.style.setProperty(`--colNum`, numSquares);
    document.documentElement.style.setProperty(`--rowSize`, `${squareSize}px`);
    document.documentElement.style.setProperty(`--colSize`, `${squareSize}px`);
        for (i = 0; i < numSquares*numSquares; i++){
            const square1 = document.createElement("div");
            square1.classList.add("new");
            container.appendChild(square1);
            square1.addEventListener("mouseover", function (e) {
                e.target.style.background = "black";
            });
        }
    }

// function to delete the grid so we can reset it
function deleteGrid(){
    const deleteSquares = document.querySelectorAll('.new');
      deleteSquares.forEach(div => {
         container.removeChild(div);
});
}

let x = numSquares();
//var z = getSize();
let y = squareSize(x, 500);
createGrid(x, y);

//Adding the functionality to the buttons
const clearButton = document.querySelector("#clearButton");
    clearButton.addEventListener("click", function(e){
        deleteGrid();
        createGrid(x, y);
    });

    