import React, {useReducer} from 'react';

const initialState = {
  firstCounter: 0,
  secondCounter: 10
};

const reducerFunction = (currentState, action) => {
  switch (action.type) {
    case "+": return {...currentState,
                      firstCounter: currentState.firstCounter + action.value};
    case "-": return {...currentState,
                      firstCounter: currentState.firstCounter - action.value};
    case "+2": return {...currentState,
                        secondCounter: currentState.secondCounter + action.value};
    case "-2": return {...currentState,
                        secondCounter: currentState.secondCounter - action.value};
    case "reset": return initialState;
    default: return currentState;
  }
}

function Counter2(){
  const [count, dispatch] = useReducer(reducerFunction, initialState);

  return(
    <div>
      <div>First Counter: {count.firstCounter}</div>
      <div>Second Counter: {count.secondCounter}</div>
      <button onClick={() => dispatch({type: "+", value: 1})}>
        +1
      </button>
      <button onClick={() => dispatch({type: "-", value: 1})}>
        -1
      </button>
      <button onClick={() => dispatch({type: "+", value: 5})}>
        +5
      </button>
      <button onClick={() => dispatch({type: "-", value: 5})}>
        -5
      </button>
      <div>
        <button onClick={() => dispatch({type: "+2", value: 1})}>
          +1 Second Counter
        </button>
        <button onClick={() => dispatch({type: "-2", value: 1})}>
          -1 Second Counter
        </button>
      </div>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
  )
}

export default Counter2;
