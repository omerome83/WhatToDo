const card = document.querySelector(".todo-card");
const todoText = document.querySelector(".todo-text");
const addTodo = document.querySelector(".add-todo");
const removeTodo = document.querySelector(".remove-todo");

const ul = document.querySelector(".fa-ul");

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
  if (todoText.value !== "") {
    addNewTodo(todoText.value);
    value = todoText.value = "";
  }
});

removeTodo.addEventListener("click", (e) => {
  removeTodos();
});

const addNewTodo = (text) => {
  //   const li = document.createElement("li");
  //   const span = document.createElement("span");

  //   span.setAttribute("class", faLiClassName);
  //   li.classList.add("fa-li");
  //   span.classList.add("fa-li");
  //   let text = document.createTextNode(text);
  //   li.appendChild(span);
  //   li.appendChild(text);
  //   ul.appendChild(li);

  let html = "";

  html = `
    <li><span class="fa-li"><i class="fa-regular fa-square"></i></span>${text}</li>
`;

  ul.innerHTML += html;
};

const removeTodos = () => {
  ul.innerHTML = "";
};
