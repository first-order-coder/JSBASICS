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
function gamingBtnClick() {
    if (gamingBtnElm.style.backgroundColor === 'white'){
        gamingBtnElm.style.backgroundColor = 'black';
        gamingBtnElm.style.color = 'white';

    }else{
        gamingBtnElm.style.backgroundColor = 'white';
        gamingBtnElm.style.color = 'black';
    }
}