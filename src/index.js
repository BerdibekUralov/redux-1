import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'

const initailState = {value: 0}

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1
      }
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 1
      }
    case "RANDOM":
      return {
        ...state,
        value: state.value * action.payload
      }
    default:
      return state;
  }
}

const store = createStore(reducer)

const update = () => document.getElementById('counter').textContent = store.getState().value
store.subscribe(update)

const dec = () => ({type: 'DECREMENT'})
const inc = () => ({type: 'INCREMENT'})
const random = (num) => ({type: 'RANDOM', payload: num})

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(inc())
})
document.getElementById('decrement').addEventListener('click', () => {
  store.dispatch(dec())
})
document.getElementById('random').addEventListener('click', () => {
  const randomValue = Math.floor(Math.random() * 10)
  store.dispatch(random(randomValue))
})

document.getElementById('counter').textContent()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      {/* <h3 style={{textAlign: 'center'}}>Hello Redux </h3> */}
    </>
  </React.StrictMode>
);