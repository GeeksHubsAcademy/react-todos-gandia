import { useState } from "react";
import "./App.css";

const todosInitial = JSON.parse(localStorage.getItem("todos") || "[]");

function Todos() {
  const [todos, _setTodos] = useState(todosInitial);
  const setTodos = (todos) => {
    _setTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          id: todo.id,
          title: todo.title,
          completed: !todo.completed,
        };
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const nodes = todos.map((todo) => (
    <div
      key={todo.id}
      className={"todo " + (todo.completed ? "completed" : "active")}
    >
      <p className="todo-text">{todo.title}</p>
      <div className="todo-actions">
        <button onClick={() => completeTodo(todo.id)}>Complete</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  ));

  return (
    <div className="Todos">
      <input
        type="text"
        placeholder="Add Todo"
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            const newTodo = {
              id: Date.now(),
              title: event.target.value,
              completed: false,
            };
            setTodos([newTodo, ...todos]);
            event.target.value = "";
          }
        }}
      />
      <section>
        {nodes}
      </section>
      <pre>
        {JSON.stringify(todos, null, 2)}
      </pre>
    </div>
  );
}

export default Todos;
