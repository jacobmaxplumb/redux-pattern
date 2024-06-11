import './App.css';
import { useReducer } from 'react';

const initialState = {
  count: 0
}

const counterReducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1}
    case "DEINCREMENT":
      return {...state, count: state.count - 1}
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  console.log(state);

  return (
    <>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
      <button onClick={() => dispatch({type: 'DEINCREMENT'})}>-</button>
    </>
  );
}

export default App;
