let color = 'black';
let click = 'false';

document.addEventListener('DOMContentLoaded', function() {
    createGrid(16);

    this.documentElement.querySelector('body').addEventListener('click', function(e){
        if(e.target.tagName != 'BUTTON') {
            click = !click;
            let draw = document.querySelector('#draw');
            if(click){
                draw.innerHTML = 'Drawing enabled';
            } else {
                draw.innerHTML = 'Drawing disabled!';
            }
        }
    })

    let btn_popup = document.querySelector('#popup');
    btn_popup.addEventListener('click', function(){
        let size = getSize()
        createGrid(size);
    })
});

function createGrid(size) {
    let grid = document.querySelector('.grid');
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numberDivs = size * size;

    for(let c = 0; c < numberDivs; c++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv);
        grid.insertAdjacentElement('beforeend', div);
    }
}

function getSize() {
    let input = prompt('How many cells do you want on the board?');
    let message = document.querySelector('#message');
   if(input == '') {
        message.innerHTML = "Please provide a number";
   } else if (input < 0 || input > 100) {
        message.innerHTML = "Provide a number between 1 and 100"
   } else {
        message.innerHTML = "Now you Play!"
        return input;
   }
}

function colorDiv() {
    if(click){
        if(color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else {
            this.style.backgroundColor = 'black';    
        }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetGrid() {
    let divs = document.querySelectorAll('div')
    divs.forEach((div) => div.style.backgroundColor = 'white');
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
