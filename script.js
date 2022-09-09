const card = document.querySelector(".todo-card");
const todoText = document.querySelector(".todo-text");
const addTodo = document.querySelector(".add-todo");
const removeTodo = document.querySelector(".remove-todo");

const faLiElement = `<span class="fa-li">`;
const faSolidCheckSquareBullet = `<i class="fa-solid fa-check-square"></i>`;
const faRegularSquareBullet = `<i class="fa-regular fa-square"></i>`;

todoText.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && todoText.value !== "") {
    console.log(todoText.value);
    todoText.value = "";
  }
});

addTodo.addEventListener("click", (e) => {
  if (todoText.value !== "") {
    console.log(todoText.value);
    todoText.value = "";
  }
});

removeTodo.addEventListener("click", (e) => {});
