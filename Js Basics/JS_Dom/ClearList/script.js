var itemInput = document.querySelector("#itemInput");
var addBtn = document.querySelector("#addBtn");
var todoList = document.querySelector("#todoList");
var clearBtn = document.querySelector("#clearBtn");
var clearItem = document.querySelector("#clearItem");

addBtn.addEventListener('click', ()=> {

    var item = document.createElement("li");
    item.textContent = itemInput.value;
    todoList.appendChild(item);
    itemInput.value = "";
});

clearBtn.addEventListener('click', ()=> {

    todoList.innerHTML = "";

});

clearItem.addEventListener('click', ()=> {

    alert("Which Item to Clear");
}); 