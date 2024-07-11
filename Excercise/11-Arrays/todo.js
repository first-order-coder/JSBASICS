const todoList1 = [];
const todoList2 = [];

let inputElm = document.querySelector('#todo-1')
let inputElm2 = document.querySelector('#todo-2')

function addButton(){
    todoList1.push(inputElm.value)
    console.log(todoList1)
    inputElm.value = ''
}

function addButton(){
    todoList2.push(inputElm2.value)
    console.log(todoList2)
    inputElm2.value = ''
}
