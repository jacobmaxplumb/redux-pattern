import "./App.css";
import { useReducer } from "react";

const initialState = {
  text: "",
  todos: [],
};

const todosReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "UPDATE_TEXT":
      return { ...state, text: action.payload };
    case "ADD_TODO":
      return { todos: [...state.todos, state.text], text: "" };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(todosReducer, initialState);
  console.log(state);

  return (
    <>
      <h2>Todo List</h2>
      <input
        value={state.text}
        onChange={(e) =>
          dispatch({ type: "UPDATE_TEXT", payload: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "ADD_TODO" })}>Add</button>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
