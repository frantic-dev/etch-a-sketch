const container = document.querySelector("#container");
const array = [];

function createDivs() {
    let div = document.createElement("div");
    div.classList.add("remove");
    div.setAttribute('onmouseover', "colorGrey(this)")
    container.appendChild(div);
    array.push(div);
}

function colorGrey(div) {
    div.style.backgroundColor = 'rgba(116, 116, 116, 0.878)';
}

for (let i = 1 ; i <= 256; i++) {
    createDivs();
}
const button = document.querySelector('#change-grid');
let gridNumber = 1;

button.addEventListener('click', changeGrid);

function remove(oldGridNumber) {
    for ( let i = 1 ; i <= oldGridNumber; i++) {
    let remove = document.querySelector(".remove");
    container.removeChild(remove)
}
}
let tries = 1;
function changeGrid(gridNumber) {
    gridNumber = prompt('Enter the number of squares per side you want', "50");
    if (gridNumber < 100) {
    oldGridNumber = array.length;
    remove(oldGridNumber);
    array.length = 0;
    for (let j = 1 ; j <= (gridNumber * gridNumber) ; j++) {
        createDivs();
    }
    container.style.gridTemplateColumns = 'repeat(' + gridNumber + ", calc(100% / " + gridNumber + ") )"
    }
};

const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener('click', clear)

function clear() {
    array.forEach((div) => div.setAttribute('style', "background-color: white;"))
};

const eraserBtn = document.querySelector("#eraser");

function erase() {
    array.forEach((div) => {
        return div.addEventListener('mouseover', ()=> div.style.backgroundColor = "white")
    })
};

eraserBtn.addEventListener('click', erase);

const defaultPen = document.querySelector('#default-pen');

defaultPen.addEventListener('click', () => {
    array.forEach((div) => div.addEventListener('mouseover', ()=> div.style.backgroundColor ="grey"))
})

function randomNumber() {
    return Math.floor(Math.random() * 256)
};

const multicolorBtn = document.querySelector("#multicolor-btn");

multicolorBtn.addEventListener('click' , () => {
    array.forEach((div) => div.addEventListener('mouseover', ()=> div.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()},${randomNumber()})`))
})

