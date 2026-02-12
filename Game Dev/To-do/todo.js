var todoList = [];
var compList = [];
var remList = [];
var addButton = document.getElementById("add-button");
var todoInput = document.getElementById("todo-input");
var deleteAllButton = document.getElementById("delete-all");
var allTodos = document.getElementById("all-todos");
var deletesButton = document.getElementById("delete-selected");

function addTask() {

    if (todoInput.value != "") {
        var text = todoInput.value;
        todoList.push({
            content: text,
            id: Date.now().toString(),
            complete: false
        });

        updateList();
        todoInput.value = "";
        appendTask(todoList);
    }
    else {
        alert("dvk");
    }
}

function updateList() {

    remList = todoList.filter((data) => {
        return !data.complete;
    });

    compList = todoList.filter((data) => {
        return data.complete;
    });

    document.querySelector("#r-count").textContent = todoList.length;
    document.querySelector("#c-count").textContent = compList.length;

}

function appendTask(todoList) {
    allTodos.innerHTML = "";

    todoList.forEach((element) => {
        var x = `<li id=${element.id} class="todo-item">  
                <p id="task"> ${element.complete ? `<strike>${element.content}</strike>` : element.content} 
                </p>  
                <div class="todo-actions">  
                    <button class="complete btn btn-success">  
                        <i class=" ci bx bx-check bx-sm"></i>  
                    </button>  
                    <button class="delete btn btn-error" >  
                        <i class="di bx bx-trash bx-sm"></i>  
                    </button>  
                </div>  
            </li>`
        allTodos.innerHTML += x;
    });
}

function deleteAll() {
    todoList = [];
    updateList();
    appendTask(todoList);

}

function deletes() {
    todoList = todoList.filter((data) => {
        if (data.complete == 'false') {
            return data;
        }
    });
    updateList();
    appendTask(todoList);
}

addButton.addEventListener("click", addTask);
todoInput.addEventListener("keypress", (event) => {
    if (event.key == 'Enter') {
        addTask();
    }
});

deleteAllButton.addEventListener("click", deleteAll);
deletesButton.addEventListener("click", deletes);

function deleteTask(event) {
    var id = event.target.parentElement.parentElement.getAttribute('id');
    todoList = todoList.filter((data) => {
        return data.id != id;
    });

    updateList();
    appendTask(todoList);
}

function completeTask(event) {
    var id = event.target.parentElement.parentElement.getAttribute('id');
    todoList.forEach((data) => {
        if (data.id == id) {

            if (data.complete == false) {
                data.complete = true;
                event.target.parentElement.parentElement.querySelector('#task').classList.add('line');
            }
            else {
                data.complete = false;
                event.target.parentElement.parentElement.querySelector('#task').classList.remove('line');
            }
        }
    });

    updateList();
    appendTask(todoList);

}

document.addEventListener('click', (event) => {

    (event.target)

    if (event.target.classList.contains('delete') || event.target.classList.contains('di')) {
        deleteTask(event);
    }
    if (event.target.classList.contains('complete') || event.target.classList.contains('ci')) {
        completeTask(event);
    }
    if (event.target.classList.contains('all')) {
        updateList();
        appendTask(todoList);
    }
    if (event.target.classList.contains('rem')) {
        updateList();
        appendTask(remList);
    }
    if (event.target.classList.contains('com')) {
        updateList();
        appendTask(compList);
    }

});
