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