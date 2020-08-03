const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

// Add todo Event

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (todoInput.value === "") {
    alert("Please fill todo");
  } else {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `${todoInput.value} <a href="#" class="close-btn delete">&times;</a>
`;
    todoList.appendChild(li);
    todoInput.value = "";
  }
});

// Remove todo event

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
