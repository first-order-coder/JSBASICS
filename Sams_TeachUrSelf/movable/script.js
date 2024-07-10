const paraElm = document.getElementById("para-2")
paraElm.style.backgroundColor = "lightblue";

function moveLeft(){
    let currentLeft = parseInt(window.getComputedStyle(paraElm).left);
    paraElm.style.left = `${currentLeft - 10}px`
}
function moveRight() {
    let currentLeft = parseInt(window.getComputedStyle(paraElm).left);
    paraElm.style.left = `${currentLeft + 10}px`;
}
function moveUp() {
    let currentTop = parseInt(window.getComputedStyle(paraElm).top);
    paraElm.style.top = `${currentTop - 10}px`;
}
function moveDown() {
    let currentTop = parseInt(window.getComputedStyle(paraElm).top);
    paraElm.style.top = `${currentTop + 10}px`;
}
function showElement() {
    paraElm.style.display = "block";
}

function hideElement() {
    paraElm.style.display = "none";
}

// console.log(paraElm)
//top must be more than 150px otherwise it would go above