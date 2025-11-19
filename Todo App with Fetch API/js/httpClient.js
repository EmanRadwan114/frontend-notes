const BASE_URL = "https://dummyjson.com";
const USER_ID = 1;

async function addTodo({ todo, completed = false }) {
  const response = await fetch(`${BASE_URL}/todos/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo,
      userId: USER_ID,
      completed,
    }),
  });
  return response.json();
}

async function getAllTodos() {
  const response = await fetch(`${BASE_URL}/todos/user/${USER_ID}`);
  return response.json();
}

async function updateTodoById(id, newData) {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  });
  return response.json();
}

async function deleteTodoById(id) {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
  });
  return response.json();
}

export { addTodo, getAllTodos, updateTodoById, deleteTodoById };
