var itemInput = document.querySelector("#itemInput");
var addBtn = document.querySelector("#addBtn");
var todoList = document.querySelector("#todoList");

addBtn.addEventListener('click', () => {

    var item = document.createElement("li");
    item.textContent = itemInput.value;
    todoList.appendChild(item);
    itemInput.value = "";
});