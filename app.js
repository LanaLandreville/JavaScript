//Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listener
todoButton.addEventListener("click", addTodo);

//functions
function addTodo(event) {
  event.preventDefault();
  //todo div
  const todoDIV = document.createElement("div");
  todoDIV.classList.add("todo");
  //create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = "hey";
  neTodo.classList.add("todo-item");
  todoDIV.appendChild(newTodo);
  //check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDIV.appendChild(completedButton);
}
