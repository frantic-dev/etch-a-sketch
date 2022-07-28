const container = document.querySelector("#container");

function createDivs(i) {
    let div = document.createElement("div");
    div.classList.add(i);
    div.setAttribute('onmouseover', "colorGrey(this)")
    container.appendChild(div);
}

function colorGrey(div) {
    div.style.backgroundColor = 'rgba(116, 116, 116, 0.878)';
}

for (let i = 1 ; i <= 256; i++) {
    createDivs(i)
}