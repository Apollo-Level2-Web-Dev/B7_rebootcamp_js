console.log("Connected!!!");
// console.log(document)

const url = "https://dummyjson.com/todos";

const renderTodos = (todos) => {
  const container = document.getElementById("todos");
  container.innerHTML = "";

  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.className = "bg-white p-4 rounded shadow flex justify-between";

    div.innerHTML = `<span> ${todo.todo} <span class="text-sm text-gray-500 "> ${todo.userId} </span> </span> 
        <span class="${todo.completed ? "text-green-600" : "text-red-600"}"> ${todo.completed ? "Completed" : "Not Completed"} </span>
        `;

    container.appendChild(div);
  });
};

const getTodosThen = () => {
  fetch(url)  // "https://dummyjson.com/todos"
    .then((res) => res.json())
    .then((data) => {
      console.log(data.todos);
      renderTodos(data.todos);
    })
    .catch((err) => console.log(err));
};

const getTodosAsync = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    renderTodos(data.todos);
  } catch (err) {
    console.error(err);
  }
};

const userData = {
  todo: "Use DummyJSON in the project",
  completed: false,
  userId: 5,
};

const createTodo = async () => {
  const res = await fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const newTodo = await res.json();
  //   console.log(newTodo);
  renderTodos([newTodo]);
};

const updateTodoPut = async () => {
  const res = await fetch("https://dummyjson.com/todos/1", {
    method: "PUT" /* or PATCH */,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      completed: false,
    }),
  });
  const updatedData = await res.json();
  renderTodos([updatedData]);
};

const deleteTodo = async () => {
  const res = await fetch("https://dummyjson.com/todos/1", {
    method: "DELETE",
  });
  const deletedData = await res.json();
  renderTodos([deletedData]);
};


