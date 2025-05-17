const todoList =[ {
    name:`make dinner`,
    dueDate: `2022-12-22`
}
    name:`wash dishees`,
    dueDate: `2022-12-22`
}];
 
renderTodoList();

function renderTodoList() {
let todoListHTML = ´´;

  todoList.forEach((todoObject, index)) => {
    cost{ name, dueDate } = todoObject;
    const todoObject = todoList[i];
    const dueDAte = todoObject.dueDate;
    const { name , dueDate } = todoObject;
    const html =``
     `<div>${name}</div>
     <div>${dueDate}</div>
     <button onclick=¨
     todoList.splice(${i},1);
     renderTodoList();
     ¨ class=¨delete-todo-button¨ >
        Delete</button>
     </p>`;
}
   todoListHTML  += html;

 document.querySelector(´.js-to-do-list´)
   .innerHTML = todoListHTML;
}

function addTodo () {
    const inputElement = document.querySelector(´.
        js-input`)
    const name = inputElement.value;
    const dateInputElement = document.querySelector(`.
        js-due-date-input`);
    const dueDate = dateInputElement.value;

    todoList.push({
    //name: name,
    //dueDate: dueDate),
    name,
    dueDate
    };

    inputElement.value = ´ ´;

    randerTodoList();
}