import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'

const initailState = 0

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state += 1  
    case "DECREMENT":
      return state -= 1  
    default:
      return state;
  }
}

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      Hello
    </>
  </React.StrictMode>
);