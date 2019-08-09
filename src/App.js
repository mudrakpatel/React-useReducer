import React, {useReducer} from 'react';
//import logo from './logo.svg';
import './App.css';
//import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
//import Counter1 from './components/Counter1';
//import Counter2 from './components/Counter2';
//import Counter3 from './components/Counter3';
// import ComponentA from './components/ComponentA';
// import ComponentB from './components/ComponentB';
// import ComponentC from './components/ComponentC';
//
// export const CountContext = React.createContext();
//
// const initialState = 0;
//
// const reducerFunction = (currentState, action) => {
//   switch (action) {
//     case "+": return currentState + 1;
//     case "-": return currentState - 1;
//     case "reset": return initialState;
//     default: return currentState;
//   }
// }

function App() {
  //const [count, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div className="App">
      {/*<DataFetchingOne/>*/}
      <DataFetchingTwo/>
    </div>
  );
}

export default App;
