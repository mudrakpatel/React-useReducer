import React, {useEffect, useReducer} from 'react';
import axios from 'axios';

const initialState = {
  loading: true,
  error: "",
  post: {}
}

const reducerFunction = (state, action) => {
  switch(action.type){
    case "FETCH_SUCCESS":
          return{
            loading: false,
            post: action.payload,
            error: ""
          }
    case "FETCH_ERROR":
          return{
            loading: false,
            post: {},
            error: "Something went wrong!"
          }
    default:
          return state;
  }
}

function DataFetchingTwo(){
  const [state, dispatchFunction] = useReducer(reducerFunction, initialState);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
         .then(response => {
           dispatchFunction({
             type: "FETCH_SUCCESS",
             payload: response.data
           });
         })
         .catch(error => {
           dispatchFunction({
             type: "FETCH_ERROR"
             //When error, no payload required
           });
         });
  }, []);

  return(
    <div>
      {state.loading ? "Loading..." : state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default DataFetchingTwo;
