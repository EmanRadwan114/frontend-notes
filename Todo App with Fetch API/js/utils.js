/**
 * Create a todo card and return it to be appended later
 * @param todo the whole todo object which contains todo title and its completion status
 * @returns the created todo card
 */
function createTodoCard({ todo }) {
  const cardBox = document.createElement("div");
  const todoContainer = document.createElement("p");
  const content = document.createTextNode(todo.todo);
  todoContainer.appendChild(content);

  const btnsContainer = document.createElement("div");
  const completeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  completeBtn.append(todo.completed ? "Uncomplete" : "Complete");
  deleteBtn.append("Delete");
  btnsContainer.append(completeBtn, deleteBtn);

  cardBox.append(todoContainer, btnsContainer);

  todoContainer.classList.add("todo-content");
  todoContainer.style.textDecoration = todo.completed ? "line-through" : "none";
  btnsContainer.classList.add("btns-container");
  completeBtn.classList.add("btn", "complete-btn");
  deleteBtn.classList.add("btn", "del-btn");
  cardBox.classList.add("card");

  cardBox.setAttribute("data-id", todo.id);

  return cardBox;
}

/**
 * Display todos on the UI
 * @param todosList array of todos
 * @param cardsContainer which will include the todo
 */
function displayTodos({ todosList, cardsContainer }) {
  const cards = [];
  cardsContainer.innerHTML = "";

  if (todosList.length) {
    for (let todo of todosList) {
      const card = createTodoCard({ todo });

      cards.push(card);
    }

    cardsContainer.append(...cards);
  } else {
    const emptyList = document.createElement("p");
    emptyList.append("No Todos found... start adding a new one");
    emptyList.classList.add("empty-list");
    cardsContainer.style.justifyContent = "center";
    cardsContainer.appendChild(emptyList);
  }
}

export { createTodoCard, displayTodos };
