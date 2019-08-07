import React, {useContext} from 'react';
import { CountContext } from '../App';

function ComponentD(){
  const countContext = useContext(CountContext);

  return(
    <div>
      ComponentD: {countContext.countState}
      <button onClick={() => countContext.countDispatch("+")}>+</button>
      <button onClick={() => countContext.countDispatch("-")}>-</button>
      <button onClick={() => countContext.countDispatch("reset")}>0</button>
    </div>
  )
}

export default ComponentD;
