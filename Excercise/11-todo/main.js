let eventElm = document.querySelector('#event-input')
let dateElm = document.querySelector('#date-input')
let displayElm = document.querySelector('.empty-display')
let timeElm = document.querySelector('#time-input')

// created three empty lists
let todoList1 = [];
let todoDate1 = [];
let todoTime1 = [];

function display(){
    //add the input fields values in to corresponding lists.
    todoList1.push(eventElm.value) 
    todoDate1.push(dateElm.value)
    todoTime1.push(timeElm.value)

    // clearing input fields after ADD button is pressed.
    eventElm.value = ''
    dateElm.value = ''
    timeElm.value = ''
    eventAdder()

}

function deleteBtn(index) {
    // when delete button is pressed the corresponding event with the index will be removed from each list.
    todoList1.splice(index, 1);
    todoDate1.splice(index, 1);
    todoTime1.splice(index, 1);

    // once they are removed we run eventAdder function once again.
    // so it will be upadated and displayed.
    eventAdder();
}

function eventAdder(){
    let todoHtmlLst = ''; //reset HTML string
    
    // using a for loop we go through the items in each list.
    for (let i = 0; i < todoList1.length; i++){
       let todoevnt = todoList1[i]
       let todoDate = todoDate1[i]
       let todoTime = todoTime1[i]

       // then we create a Html string to be added to our empty Html string.
       todoHtml = `<p class="para-1">${todoevnt} ${todoDate} ${todoTime}<button onclick="deleteBtn(${i})">DELETE</button></p>`;

        todoHtmlLst += todoHtml;
    }
    //then displayElms innerHTML is changed in to the one in the HTML string.
    displayElm.innerHTML = todoHtmlLst
}