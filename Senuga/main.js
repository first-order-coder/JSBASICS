let pwdElm = document.querySelector('#password-input')
let pwdRecheckElm = document.querySelector('#password-recheck')
let emptyparaElm = document.querySelector('.empty-para')

function submitBtn(){
    if(pwdElm.value === pwdRecheckElm.value){
        emptyparaElm.innerText = ''
    }
    else{
        emptyparaElm.innerText = '*Please recheck the passwords entered'
        pwdElm.value = '';
        pwdRecheckElm.value = '';
    }
}

let updateElm = document.querySelector('.update-btn');
let firstNameElm = document.querySelector('#name-first');
let lastNameElm = document.querySelector('#name-last');
let emailElm = document.querySelector('#email-input');
let phoneElm = document.querySelector('#telephone-input');
let dobElm = document.querySelector('#dob-input')
let genderElm = document.querySelector('#gender')

function updateBtn(buttonClicked){
    buttonClicked.value = '';
}

let emptyPara2Elm = document.querySelector('.empty-para-2');
let emptyPara3Elm = document.querySelector('.empty-para-3');
let emptyPara4Elm = document.querySelector('.empty-para-4');
let emptyPara5Elm = document.querySelector('.empty-para-5');
let emptyPara6Elm = document.querySelector('.empty-para-6');
let emptyPara7Elm = document.querySelector('.empty-para-7');

function displayInfo(){
    emptyPara2Elm.innerText = `Full Name: ${firstNameElm.value}  ${lastNameElm.value}`
    emptyPara3Elm.innerText = `Email Address: ${emailElm.value}`
    emptyPara4Elm.innerText = `Phone Number: ${phoneElm.value}`
    emptyPara5Elm.innerText = `Date of Birth: ${dobElm.value}`
    emptyPara5Elm.innerText = `Date of Birth: ${dobElm.value}`
    emptyPara6Elm.innerText = `Gender: ${genderElm.value}`
    emptyPara7Elm.innerText = `Password: ${pwdElm.value}`

}