let tilesElm = document.querySelectorAll(".tile")

let generateRandomColor = () => {
    let colorCount = (Math.random()) * 256;  
    let colorCount2 = (Math.random()) * 256;
    let colorCount3 = (Math.random()) * 256;

    return `rgb(${colorCount2}, ${colorCount3}, ${colorCount})`
}

let colorChange = (event) => {
    event.target.style.backgroundColor = generateRandomColor();
}

let colorReverse = (event) => {
    event.target.style.backgroundColor = "black";   
}

tilesElm.forEach(tile => {
    tile.addEventListener("mouseover", colorChange);
    tile.addEventListener("mouseleave", colorReverse);
});

// instead of this whole code we can use add event listener and reduce the monoliths

// let tile1Elm = document.querySelector("#tile-1")
// let tile2Elm = document.querySelector("#tile-2")
// let tile3Elm = document.querySelector("#tile-3")
// let tile4Elm = document.querySelector("#tile-4")
// let tile5Elm = document.querySelector("#tile-5")

// let colorChange2 = () => {
//     let colorCount = (Math.random()) * 256;  
//     let colorCount2 = (Math.random()) * 256;
//     let colorCount3 = (Math.random()) * 256;

//     tile2Elm.style.backgroundColor = `rgb(${colorCount2}, ${colorCount3}, ${colorCount})`
// }
// let colorChange3 = () => {
//     let colorCount = (Math.random()) * 256;  
//     let colorCount2 = (Math.random()) * 256;
//     let colorCount3 = (Math.random()) * 256;

//     tile3Elm.style.backgroundColor = `rgb(${colorCount2}, ${colorCount3}, ${colorCount})`
// }
// let colorChange4 = () => {
//     let colorCount = (Math.random()) * 256;  
//     let colorCount2 = (Math.random()) * 256;
//     let colorCount3 = (Math.random()) * 256;

//     tile4Elm.style.backgroundColor = `rgb(${colorCount2}, ${colorCount3}, ${colorCount})`
// }
// let colorChange5 = () => {
//     let colorCount = (Math.random()) * 256;  
//     let colorCount2 = (Math.random()) * 256;
//     let colorCount3 = (Math.random()) * 256;

//     tile5Elm.style.backgroundColor = `rgb(${colorCount2}, ${colorCount3}, ${colorCount})`
// }

// tile1Elm.onmouseover = colorChange1;
// tile2Elm.onmouseover = colorChange2;
// tile3Elm.onmouseover = colorChange3;
// tile4Elm.onmouseover = colorChange4;
// tile5Elm.onmouseover = colorChange5;

// let colorReverse1 = () => {
//     tile1Elm.style.backgroundColor = 'black';
// }
// let colorReverse2 = () => {
//     tile2Elm.style.backgroundColor = 'black';
// }
// let colorReverse3 = () => {
//     tile3Elm.style.backgroundColor = 'black';
// }
// let colorReverse4 = () => {
//     tile4Elm.style.backgroundColor = 'black';
// }
// let colorReverse5 = () => {
//     tile5Elm.style.backgroundColor = 'black';
// }

// tile1Elm.onmouseleave = colorReverse1;
// tile2Elm.onmouseleave = colorReverse2;
// tile3Elm.onmouseleave = colorReverse3;
// tile4Elm.onmouseleave = colorReverse4;
// tile5Elm.onmouseleave = colorReverse5;