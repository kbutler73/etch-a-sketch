const grid = document.getElementById('grid');

const newGridButton = document.querySelector('#new-grid-button');
newGridButton.addEventListener('click', createNewGrid);

createGrid(16);

function createNewGrid(e) {
    const gridSize = prompt("Enter size (400 max): ");
    createGrid(gridSize);
}

function createGrid(gridSize){
    if(gridSize <= 0) gridSize = 1;
    if(gridSize > 400) gridSize = 400;
    const pixelSize = 800/gridSize;
    
    grid.innerHTML = "";
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('flex-container');
        for (let j = 0; j < gridSize; j++) {
            let cell = document.createElement('div');
            cell.style.width = pixelSize + "px";
            cell.style.height = pixelSize + "px";
            cell.addEventListener('mouseover', setColor);
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function setColor(e){
    
    let opacity = this.style.opacity;
    if(opacity === "") 
        {
            opacity = 0;
        }
    this.style.backgroundColor = "#0000ff";
    let newOpacity = parseFloat(opacity) + .1;
    this.style.opacity = newOpacity;
    

}