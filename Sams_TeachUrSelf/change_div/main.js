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