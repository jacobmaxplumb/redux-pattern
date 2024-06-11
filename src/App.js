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
    </>
  );
}

export default App;
