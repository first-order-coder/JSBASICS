let displayElm = document.querySelector('.popup-content')
function popUpShow(){
    displayElm.style.display = 'block';
}

let progressBarOutlineElm = document.querySelector('.progress-bar-outline')
function progressBarDisplay(){
    progressBarOutlineElm.style.display = 'block';
    
}
let progressBarElm = document.querySelector('#progress-bar')
let progressBarValueElm = document.querySelector('#progress-value')
let popup1Elm = document.querySelector('.pop-up-1')
let popup2Elm = document.querySelector('.pop-up-2')
let popup3Elm = document.querySelector('.pop-up-3')
let popup4Elm = document.querySelector('.pop-up-4')
let popup5Elm = document.querySelector('.pop-up-5')
let popup6Elm = document.querySelector('.pop-up-6')

let popup7Elm = document.querySelector('.pop-up-7')


let step1Out = [];
let step1OutDetails = ['First Name', 'Last Name', 'Age', 'Gender','Student ID']
let step1Outhtml = '';
let step1Output = document.querySelector('#output-step1')
let firstNameElm = document.querySelector('#first-name-input')
let lastNameElm = document.querySelector('#last-name-input')
let ageElm = document.querySelector('#age-input')
let genderElm = document.querySelector('#gender-input')
let stdIDElm = document.querySelector('#std-input')

function nextBtnPress(amount, qnumber){
    progressBarElm.value += amount;
    progressBarValueElm.innerText = `${progressBarElm.value}%`;
    step1Display(qnumber)
}

function step1Display(qnumber){

    if (qnumber === 1){
        popup2Elm.style.display = 'block';
        step1Out.push(firstNameElm.value);
    }
    else if (qnumber === 2){
        popup3Elm.style.display = 'block';
        step1Out.push(lastNameElm.value)
    }
    else if (qnumber === 3){
        popup4Elm.style.display = 'block';
        step1Out.push(ageElm.value)

    }
    else if (qnumber === 4){
        popup5Elm.style.display = 'block';
        step1Out.push(genderElm.value)

    }
    else if (qnumber === 5){
        popup6Elm.style.display = 'block';
        step1Out.push(stdIDElm.value)
    }
    else if (qnumber === 6){
        popup7Elm.style.display = 'block';
        // step1Out.push(stdIDElm.value)
    }

    step1Outhtml = '';

    for(let i=0; i<step1Out.length; i++){
        let step1outputVal = step1Out[i];
        let step1outputDetails = step1OutDetails[i];
        let step1OutHTML = `<p>${step1outputDetails}:${step1outputVal}</p>`;
        step1Outhtml += step1OutHTML;
    }
    step1Output.innerHTML = step1Outhtml;

}

