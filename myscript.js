//create grid container that stores square divs
const gridContainer = document.createElement('div');
gridContainer.setAttribute('id', 'grid-container');
document.querySelector('#container').appendChild(gridContainer);

//create multiple square divs on x and y directions
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('square');
        gridSquare.classList.add('hover');
        document.querySelector('#grid-container').appendChild(gridSquare);
    }

}

//Create hover effect
let hoverAll = document.querySelectorAll('.hover');
//Use forEach to addEventListener to all elements
hoverAll.forEach(function(hoverOne) {
    //mouse enters div
    hoverOne.addEventListener('mouseover', (e) => {
        e.target.setAttribute('style', 'background: pink');
    }, false);
    //mouse leaves div
    hoverOne.addEventListener('mouseout', (e) => {
        e.target.setAttribute('style', 'background: white');
    }, false);
})

