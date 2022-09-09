//create button to ask grid size
//create div to store button element
const btnContainer = document.createElement('div');
btnContainer.setAttribute('id', 'btn-container');
document.querySelector('#container').appendChild(btnContainer);

//new sketch button element
const newSketch  = document.createElement('button');
newSketch.setAttribute('id', 'new-sketch');
newSketch.textContent = 'New Sketch';
document.querySelector('#btn-container').appendChild(newSketch);

//create grid container that stores square divs
const gridContainer = document.createElement('div');
gridContainer.setAttribute('id', 'grid-container');
document.querySelector('#container').appendChild(gridContainer);

//global variable for grid size
let size;
 
let columnContainer;
//create grid
function createGrid (gridSize) {
    for (let x = 0; x < gridSize; x++) {
        //create container for columns
            columnContainer = document.createElement('div');
            columnContainer.setAttribute('id', 'column-container' + x);
            columnContainer.classList.add('column');
            document.querySelector('#grid-container').appendChild(columnContainer);
        for (let i = 0; i < gridSize; i++) {
        //create number of squares per column 
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('square');
            gridSquare.classList.add('hover');
            columnContainer.appendChild(gridSquare);
        //Create hover effect
        gridSquare.addEventListener('mouseover', color);

        }
    }
}

//create color attribute for mouseover
function color(e) {
    let newColor = randomColor();
    e.target.style.background = newColor;
}

//generate random color
function randomColor () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgbColor = "rgb("+r+","+g+","+b+")";
    return rgbColor;
}


//ask user for input
function getInput (userInput) {
    reset();
    let answer = prompt('Enter number between 1 and 100: ');
    if (answer < 1 || answer > 100 || isNaN(answer) == true) {
        while (answer < 1 || answer > 100 || isNaN(answer) == true){
            answer = confirm('Invalid Value!');
        }
        reset();
    } else {
        userInput = parseInt(answer);
        size = userInput;
        createGrid(size);
    }

}

//clear existing grid
function reset () {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

newSketch.addEventListener('click', getInput);