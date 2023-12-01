import { useReducer } from "react";
import "./Todos.css";

// const initialState = JSON.parse(localStorage.getItem("todos") || "[]");

const initialState = [
  {
    id: 1,
    title: "Learn React",
    completed: false,
  },
  {
    id: 2,
    title: "Learn JSX",
    completed: false,
  },
  {
    id: 3,
    title: "Learn Hooks",
    completed: false,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [action.payload, ...state];
    case "COMPLETE_TODO": {
      const itemIndex = state.findIndex((todo) => todo.id === action.payload);
      const item = { ...state[itemIndex] };
      item.completed = !item.completed;
      const newState = [...state];
      newState[itemIndex] = item;
      return newState;
    }
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return [...state];
  }
}

function Todos() {
  // const [todos, _setTodos] = useState(initialState);
  // const setTodos = (todos) => {
  //   _setTodos(todos);
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };
  // const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  // const completeTodo = (id) => {
  //   const newTodos = todos.map((todo) => {
  //     console.log("todo", todo);
  //     if (todo.id === id) {
  //       return {
  //         // id: todo.id,
  //         // title: todo.title,
  //         ...todo,
  //         completed: !todo.completed,
  //       };
  //     } else {
  //       return todo;
  //     }
  //   });
  //   setTodos(newTodos);
  // };

  // const handleKeyUp = (event) => {
  //   console.log("onKeyUp", event);
  //   if (event.key === "Enter") {
  //     const newTodo = {
  //       id: Date.now(),
  //       title: event.target.value,
  //       completed: false,
  //     };
  //     setTodos([newTodo, ...todos]);
  //     event.target.value = "";
  //   }
  // };

  const [todos, dispatch] = useReducer(reducer, initialState);

  const deleteTodo = (id) => dispatch({ type: "DELETE_TODO", payload: id });
  const completeTodo = (id) => dispatch({ type: "COMPLETE_TODO", payload: id });
  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      const newTodo = {
        id: Date.now(),
        title: event.target.value,
        completed: false,
      };
      dispatch({ type: "ADD_TODO", payload: newTodo });
      event.target.value = "";
    }
  };

  const nodes = todos.map((todo) => (
    <div
      key={todo.id}
      className={todo.completed ? "completed" : "active"}
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
        onKeyUp={(e) => handleKeyUp(e)}
      />
      <section>
        {nodes}
      </section>
      {
        /* <pre>
        {JSON.stringify(todos, null, 2)}
      </pre> */
      }
    </div>
  );
}

export default Todos;
