let countBtnElm = document.querySelector("#count-btn")
let resetBtnElm = document.querySelector("#reset-btn")
let countParaElm = document.querySelector("#count-para")
let backgroundElm = document.querySelector(".body")
let colorArray = ["green", "blue", "red", "yellow", "teal", "orange"]
let count = 0;

let countUp = () =>{
    count += 1;
    countParaElm.innerText = `COUNT:${count}`;
    // colorArray.forEach((color) => {
    //     backgroundElm.style.backgroundColor = color --> problem is the previous colro gets overwritten by the next one, so orange is the only color then left.
    // });   
    colorChange(count);
}

let colorChange = (count) => {
    let colorIndex = count % colorArray.length; // we are taking the remainder --> count = 15; (15 % 6 == 3 <-- this is the remainder) so the in the colorArray index 
                                                // we get yellow when count is 15, this way we can make sure that the colorArray stays in range with the count.
    backgroundElm.style.backgroundColor = colorArray[colorIndex]; //
}
countBtnElm.onmousedown = countUp;

let resetCount = () => {
    count = 0;
    countParaElm.innerText = `COUNT:${count}`;
}
resetBtnElm.onmousedown = resetCount;