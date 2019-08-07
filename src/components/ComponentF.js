import React, {useContext} from 'react';
import { CountContext } from '../App';

function ComponentF(){
  const countContext = useContext(CountContext);

  return(
    <div>
      ComponentF: {countContext.countState}
      <button onClick={() => countContext.countDispatch("+")}>+</button>
      <button onClick={() => countContext.countDispatch("-")}>-</button>
      <button onClick={() => countContext.countDispatch("reset")}>0</button>
    </div>
  )
}

export default ComponentF;
