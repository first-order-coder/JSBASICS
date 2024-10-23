let inputElm = document.querySelector('#input-elm')
let submitBtnElm = document.querySelector('#submit-btn')

const morseCode = { A : '.-', 'B':'-...',
    'C':'-.-.', 'D':'-..', 'E':'.',
    'F':'..-.', 'G':'--.', 'H':'....',
    'I':'..', 'J':'.---', 'K':'-.-',
    'L':'.-..', 'M':'--', 'N':'-.',
    'O':'---', 'P':'.--.', 'Q':'--.-',
    'R':'.-.', 'S':'...', 'T':'-',
    'U':'..-', 'V':'...-', 'W':'.--',
    'X':'-..-', 'Y':'-.--', 'Z':'--..',
    '1':'.----', '2':'..---', '3':'...--',
    '4':'....-', '5':'.....', '6':'-....',
    '7':'--...', '8':'---..', '9':'----.',
    '0':'-----', ', ':'--..--', '.':'.-.-.-',
    '?':'..--..', '/':'-..-.', '-':'-....-',
    '(':'-.--.', ')':'-.--.-'}

let submitInput = (event) => {
    // console.log(morseCode.inputVal)
    if (event.key === "Enter") {
        let inputVal = inputElm.value;
        if(inputVal){
            submitBtnElm.onclick = submitInput;
            console.log(inputVal);
            inputElm.value = '';
        } 
    }
}
inputElm.addEventListener('keydown',submitInput);

let submitBtnFunc = () => {

}


