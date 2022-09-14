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

      //   faLiClassName.addEventListener("click", (e) => {
      //     console.log(e.target);
      //     console.log("HI");
      //     // faLiClassName.style.textDecoration = "line-through";
      //     // if(faLiClassName.classList.contains("fa-regular fa-square") {
      //     //     faLiClassName.classList.remove("fa-regular fa-square");
      //     //     faLiClassName.classList.add("fa-solid fa-check-square");
      //     // })
      //     // faLiClassName.classList.remove("fa-solid fa-check-square");

      //     // faLiClassName.classList.remove("fa-regular fa-square");
      //     // faLiClassName.classList.add("fa-solid fa-check-square");
      //   });
    }
  } catch (err) {
    console.log(err);
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

  //   html = `
  //     <li><span class="fa-li"><i class="fa-regular fa-square"></i></span>${text}</li>
  // `;

  html = `
  <li>${text}</li>
`;

  ul.innerHTML += html;

  ul.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      console.log(e.target);
      e.target.style.textDecoration = "line-through";
      //   e.target.classList.add("fa-regular", "fa-checked");
    }
  });
};

const removeTodos = () => {
  ul.innerHTML = "";
};
