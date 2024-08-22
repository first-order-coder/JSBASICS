// using the below method we can keep html completely alone without any js functions
let butnElm = document.querySelector('#btn-hello')
function mousealert(){
    // alert('You sitting on link')
    console.log("HELLO")
}
butnElm.onclick = mousealert;

// instead of putting onkeydown method inside the button element can use this 
// this way the html part will be completely free of js code
function myFunc(event){
    console.log(event.key); //event key is used on onkeydown event to get the pressed key
    let value = event.button; //event.button is used to get the mouse button that was clicked
    console.log(value)
}
butnElm.onkeydown = myFunc; // and event.button is only available for mouse events like mousedown or mouseup --> thats why undefined is returned in results.
butnElm.onmousedown = myFunc;

