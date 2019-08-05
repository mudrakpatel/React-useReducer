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

function Counter3(){
  const [count, dispatch] = useReducer(reducerFunction, initialState);
  const [count2, dispatch2] = useReducer(reducerFunction, initialState);

  return(
    <React.Fragment>
      <div>
        <div>Count: {count}</div>
        <button onClick={() => dispatch("+")}>+</button>
        <button onClick={() => dispatch("-")}>-</button>
        <button onClick={() => dispatch("reset")}>0</button>
      </div>
      <div>
        <div>Count Two: {count2}</div>
        <button onClick={() => dispatch2("+")}>+</button>
        <button onClick={() => dispatch2("-")}>-</button>
        <button onClick={() => dispatch2("reset")}>0</button>
      </div>
    </React.Fragment>
  )
}

export default Counter3;
