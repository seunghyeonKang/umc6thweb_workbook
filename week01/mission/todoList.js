const todoForm = document.querySelector("form");
const todoInput = document.querySelector("form input");
const todoList = document.querySelector(".todo-container");
const completedList = document.querySelector(".completed-container");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    addTodoItem(todoText);
    todoInput.value = "";
  }
});

function addTodoItem(todoText) {
  const todoItem = createItem(todoText, "완료", handleComplete);
  todoItem.classList.add("todo-item");
  todoList.appendChild(todoItem);
}

function createItem(text, buttonText, buttonHandler) {
  const item = document.createElement("div");
  item.innerHTML = `
        <p>${text}</p>
        <button>${buttonText}</button>
      `;
  const button = item.querySelector("button");
  button.addEventListener("click", () => buttonHandler(item));
  return item;
}

function handleComplete(todoItem) {
  const todoText = todoItem.querySelector("p").innerText;
  const completedItem = createItem(todoText, "삭제", handleDelete);
  completedItem.classList.add("completed-item");
  completedList.appendChild(completedItem);
  todoItem.remove();
}

function handleDelete(completedItem) {
  completedItem.remove();
}
