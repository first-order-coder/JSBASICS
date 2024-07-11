let requestBtnElm = document.querySelector('.request-btn')
function requestBtnEnter() {
    if (requestBtnElm.style.backgroundColor = 'white'){
        requestBtnElm.style.backgroundColor = 'black';
        requestBtnElm.style.color = 'white';
    }
}
function requestBtnExit(){
    if(requestBtnElm.style.backgroundColor = 'black'){
        requestBtnElm.style.backgroundColor = 'white';
        requestBtnElm.style.color = 'black';
    }
}

let gamingBtnElm = document.querySelector('.gaming-btn')
let musicBtnElm = document.querySelector('.music-btn')
let techBtnElm = document.querySelector('.tech-btn')

function BtnClick(buttonClicked) {
    if (buttonClicked.style.backgroundColor === 'white'){
        buttonClicked.style.backgroundColor = 'black';
        buttonClicked.style.color = 'white';

    }else{
        buttonClicked.style.backgroundColor = 'white';
        buttonClicked.style.color = 'black';
    }
}