import React, {useReducer} from 'react';
//import logo from './logo.svg';
import './App.css';
//import Counter1 from './components/Counter1';
//import Counter2 from './components/Counter2';
//import Counter3 from './components/Counter3';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

export const CountContext = React.createContext();

const initialState = 0;

const reducerFunction = (currentState, action) => {
  switch (action) {
    case "+": return currentState + 1;
    case "-": return currentState - 1;
    case "reset": return initialState;
    default: return currentState;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
        {/*<Counter3/>*/}
        {/*<Counter2/>*/}
        {/*<Counter1/>*/}
        Count: {count}
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </div>
    </CountContext.Provider>
  );
}

export default App;
