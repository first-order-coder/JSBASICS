let showSpecs = document.querySelector('#show-specs')
let specsElm = document.querySelector('#specs-shown')

function specsShowing(){
    if(showSpecs.innerText === ">> Hide Specs"){
        showSpecs.innerText = ">> Show Specs";
        specsElm.style.display = "none";
    }
    else{
        showSpecs.innerText = ">> Hide Specs";
        specsElm.style.display = "block";

    };
}
showSpecs.onmousedown = specsShowing;

function colorChange(){
    showSpecs.style.color = "red";
    showSpecs.style.fontWeight = "bold";
    showSpecs.style.textDecoration = "underline";
}
showSpecs.onmouseover = colorChange;

function colorUnchange(){
    showSpecs.style.color = "rgb(188, 156, 156)";
    showSpecs.style.fontWeight = "none";
    showSpecs.style.textDecoration = "none";
}
showSpecs.onmouseleave = colorUnchange;

let linktagElm = document.querySelector("#link-tag")
let gotoGoogle = () => {
    linktagElm.href = "https://www.spacex.com/";
}

let pleaseWaitElm = document.querySelector('#please-wait')
let countDownValue = 5; //initial count down value

let countDown = () => {
    if (countDownValue > 0){
        pleaseWaitElm.innerText = `>> Please Wait ${countDownValue} Seconds`;
        countDownValue--;
    }else{
        clearInterval(intervalId)
        pleaseWaitElm.innerText = `>> You can proceed`  ;
        showSpecs.style.display = "block"; 
        pleaseWaitElm.onmousedown = gotoGoogle; //will go to google page when timeout is finished and the button cursor will turn into a pointer when the time is run out and ready to be pressed and you can proceed is shown untill that the button is not pressable.
        pleaseWaitElm.style.cursor = "pointer";
    }
}
let intervalId = setInterval(countDown, 1000)
// so when setInterval calls the countDown function every second the if statements checks if it is true or not if its true then pleaseWaitElm innerText will be updated to the current countDownValue of the iteration. then countDownValue will be decerment by 1 every time the function is called in setInterval.
// then in else part when if condition is not true anymore the countDownValue will have reached 0. then using clearInterval function the the interval will be stopped and cleared.

let imageElm = document.querySelector("#ima-1")
let shadedElm = document.querySelector("#shaded-image")
let textinsideElm = document.querySelector("#text-inside")
let onimageHover = () => {
    shadedElm.style.display = "block";
}

imageElm.onmouseover = onimageHover;

let onimageLeave = () => {
    shadedElm.style.display = "none";
}

imageElm.onmouseleave = onimageLeave;