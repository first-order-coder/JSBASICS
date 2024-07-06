let sentenceElement = document.querySelector('.para-2');
let inputElement = document.querySelector('#input-1');

function addSentence(){
    sentenceElement.innerText = `${sentenceElement.innerText}\n`  + `${inputElement.value}`; // \n to get a new line every time added

    inputElement.value = "" // to clear the input element after submitting.
}
function pressEnter(event){
    if (event.key === 'Enter'){
        addSentence()
    }
}