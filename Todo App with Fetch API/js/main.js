import {
  addTodo,
  deleteTodoById,
  getAllTodos,
  updateTodoById,
} from "./httpClient.js";
import { displayTodos } from "./utils.js";

const cardsContainer = document.querySelector(".cards-container");
const addBtn = document.querySelector(".add-btn");
const todoInput = document.querySelector(".todo-input");

let todosList = [];

//———————————————————————————————— get & display all todos ————————————————————————————————
getAllTodos().then((data) => {
  todosList = data.todos;
  displayTodos({ todosList, cardsContainer });
});

//———————————————————————————————— add new todo ————————————————————————————————
addBtn.addEventListener("click", async () => {
  if (todoInput.value !== "") {
    const newTodo = await addTodo({
      todo: todoInput.value,
    });

    todosList.unshift(newTodo);
    displayTodos({ todosList, cardsContainer });
  }
});

//———————————————————————————————— update todo ————————————————————————————————
cardsContainer.addEventListener("click", async function (e) {
  //———————————————————————————————— complete task ————————————————————————————————
  if (e.target.classList.contains("complete-btn")) {
    const card = e.target.closest(".card");
    const todoId = card.getAttribute("data-id");

    const currentTodo = todosList.find((item) => item.id === +todoId);

    const updatedTodo = await updateTodoById(todoId, {
      completed: !currentTodo.completed,
    });

    todosList = todosList.map((item) =>
      item.id === +todoId ? { ...item, completed: updatedTodo.completed } : item
    );
    console.log(updatedTodo);

    displayTodos({ todosList, cardsContainer });
  }
  //———————————————————————————————— delete task ————————————————————————————————
  else if (e.target.classList.contains("del-btn")) {
    const card = e.target.closest(".card");
    const todoId = card.getAttribute("data-id");

    await deleteTodoById(todoId);

    todosList = todosList.filter((item) => item.id !== +todoId);

    displayTodos({ todosList, cardsContainer });
  }
});
