const card = document.querySelector(".todo-card");
const todoText = document.querySelector(".todo-text");
const addTodo = document.querySelector(".add-todo");
const removeTodo = document.querySelector(".remove-todo");

const ul = document.querySelector(".fa-ul");
const nodeList = document.getElementsByTagName("LI");

// const faLiClassName = document.getElementById("span fa-li i");

// const faLiClassName = `<span class="fa-li">`;
// const faSolidCheckSquareBullet = `<i class="fa-solid fa-check-square"></i>`;
// const faRegularSquareBullet = `<i class="fa-regular fa-square"></i>`;

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
      <li><span class="fa-li"><i class="fa-solid fa-circle"></i></span>${text}</li>
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
