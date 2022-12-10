document.addEventListener('DOMContentLoaded', function() {
    createGrid(16)
    console.log('hi')
});

function createGrid(size) {
    let grid = document.querySelector('.grid');
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numberDivs = size * size;

    for(let c = 0; c < numberDivs; c++) {
        let div = document.createElement('div');
        grid.insertAdjacentElement('beforeend', div);
    }
}









/* const container = document.getElementById('container');

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        container.appendChild(cell).className = 'grid-item';
        container.appendChild(cell).id = 'grid-item';
    }
}

makeRows(16,16); */






/* document.getElementById('grid-item').onmouseover = function() {
    mouseOver()
};
function mouseOver() {
    .forEach(cell => {
        document.getElementById('grid-item').style.backgroundColor = 'black';
    });
}     */
