import React, {useReducer} from 'react';

const initialState = 0;

const reducerFunction = (currentState, action) => {
  switch (action) {
    case "+": return currentState + 1;
    case "-": return currentState - 1;
    case "reset": return initialState;
    default: return currentState;
  }
}

function Counter1(){
  const [count, dispatch] = useReducer(reducerFunction, initialState);

  return(
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch("+")}>+</button>
      <button onClick={() => dispatch("-")}>-</button>
      <button onClick={() => dispatch("reset")}>0</button>
    </div>
  )
}

export default Counter1;
