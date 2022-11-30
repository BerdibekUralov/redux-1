import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux'
import * as actions from './redux/actions';
import reducer from './redux/reducers';

const store = createStore(reducer)
const {dispatch, getState, subscribe} = store

subscribe(() => document.getElementById('counter').textContent = getState().value)

const {inc, dec, random} = bindActionCreators(actions, dispatch)

document.getElementById('increment').addEventListener('click', inc)
document.getElementById('decrement').addEventListener('click', dec)
document.getElementById('random').addEventListener('click', () => {
  const randomValue = Math.floor(Math.random() * 10)
  random(randomValue)
})

document.getElementById('counter').textContent()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      
    </>
  </React.StrictMode>
);