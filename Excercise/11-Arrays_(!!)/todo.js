const todoList1 = [];
const todoList2 = [];

let inputElm = document.querySelector('#todo-1')
let inputElm2 = document.querySelector('#todo-2')
let displayElm = document.querySelector('.display-todo')

function addButton(){
    todoList1.push(inputElm.value)
    console.log(todoList1)
    inputElm.value = ''
}

function addButton(){
    todoList2.push(inputElm2.value)
    inputElm2.value = ''
    renderTodoList()
}

function renderTodoList(){
    let todoListHTML = '';

    for (let item = 0; item < todoList2.length; item++)
        {
        let value = todoList2[item]; //select one by one from the todoList2
        let html = `<p>${value}</p>`; // create html code as paragraph including items from the list
        todoListHTML += html; // add the paragraph and all the items to a new empty string 
    }
    
    displayElm.innerHTML = todoListHTML; // and change the display element to be equal to this string with html code

}