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
    if (event.key === "Enter") {
        convertToMorse();
    }
}

let submitBtnFunc = () => {
    convertToMorse();
}
// everytime a character is inputted and submitted then the function is called and it will check the inputted character with the morseCode dictionaries

function convertToMorse() {
    let inputVal = inputElm.value; // get the input elements value from the input field
    if(inputVal) {
        let morseText = ''; //when function is called the moresText will clear the field and ready up for the next
        for(let char of inputVal) {  //check what are the input characters of the inputVal 
            if(char === ' ') { 
                morseText += '    ';
            } else if(morseCode[char]) { // 
                morseText += morseCode[char] + ' '; //this way the previously entered character will be saved in the box
            } 
        }
        document.querySelector('#output').textContent = morseText;
        inputElm.value = '';
    }
}

inputElm.addEventListener('keydown',submitInput);
submitBtnElm.addEventListener('click', submitBtnFunc);


console.log(morseCode['D'])