let eventElm = document.querySelector('#event-input')
let dateElm = document.querySelector('#date-input')
let displayElm = document.querySelector('.empty-display')
let timeElm = document.querySelector('#time-input')

let todoList1 = [];
let todoDate1 = [];
let todoTime1 = [];

function display(){
    todoList1.push(eventElm.value)
    todoDate1.push(dateElm.value)
    todoTime1.push(timeElm.value)

    eventElm.value = ''
    dateElm.value = ''
    timeElm.value = ''
    eventAdder()

}

function deleteBtn(index) {
    todoList1.splice(index, 1);
    todoDate1.splice(index, 1);
    todoTime1.splice(index, 1);
    eventAdder();
}
function eventAdder(){
    let todoHtmlLst = '' //reset HTML string
    
    for (let i = 0; i < todoList1.length; i++){
       let todoevnt = todoList1[i]
       let todoDate = todoDate1[i]
       let todoTime = todoTime1[i]

       todoHtml = `<p class="para-1">${todoevnt} ${todoDate} ${todoTime}<button onclick="deleteBtn(${i})">DELETE</button></p>`;

        todoHtmlLst += todoHtml;
    }
    displayElm.innerHTML = todoHtmlLst
}