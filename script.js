const card = document.querySelector(".todo-card");
const todoText = document.querySelector(".todo-text");
const addTodo = document.querySelector(".add-todo");
const removeTodo = document.querySelector(".remove-todo");

const ul = document.querySelector(".fa-ul");
const nodeList = document.getElementsByTagName("LI");

todoText.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && todoText.value !== "") {
    addNewTodo(todoText.value);
    value = todoText.value = "";
  }
});

addTodo.addEventListener("click", (e) => {
  try {
    if (todoText.value !== "") {
      addNewTodo(todoText.value);
      value = todoText.value = "";
    }
  } catch (err) {
    console.log(err);
  }
});

removeTodo.addEventListener("click", (e) => {
  removeTodos();
});

const addNewTodo = (text) => {
  let html = "";

  html = `
      <li><span class="fa-li"><i class="fa-solid fa-pencil"></i></span>${text}</li>
  `;

  ul.innerHTML += html;

  ul.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      if (e.target.style.textDecoration === "none") {
        e.target.style.textDecoration = "line-through";
      } else {
        e.target.style.textDecoration = "none";
      }
    }
  });
};

const removeTodos = () => {
  ul.innerHTML = "";
};
