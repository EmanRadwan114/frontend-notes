const BASE_URL = "https://dummyjson.com";
const USER_ID = 1;

async function addTodo({ todo, completed = false }) {
  try {
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
  } catch (error) {
    console.log(error);
  }
}

async function getAllTodos() {
  try {
    const response = await fetch(`${BASE_URL}/todos/user/${USER_ID}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

async function updateTodoById(id, newData) {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

async function deleteTodoById(id) {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export { addTodo, getAllTodos, updateTodoById, deleteTodoById };
