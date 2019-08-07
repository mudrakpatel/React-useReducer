import React, {useContext} from 'react';
import { CountContext } from '../App';

function ComponentA(){
  const countContext = useContext(CountContext);

  return(
    <div>
      ComponentA: {countContext.countState}
      <button onClick={() => countContext.countDispatch("+")}>+</button>
      <button onClick={() => countContext.countDispatch("-")}>-</button>
      <button onClick={() => countContext.countDispatch("reset")}>0</button>
    </div>
  )
}

export default ComponentA;
