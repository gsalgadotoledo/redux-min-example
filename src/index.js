import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// Render the component for the first time
const App = (props) => <h1>Hello... {props.count} </h1>
ReactDOM.render(<App count="0" />, document.getElementById('root'));

// STATE: The application data

// In the reducer we define how the state will be changed
const reducer = (state, action) => {
  if (action.type === 'ADD') {
    return state + action.count;
  }
  return state;
};

// We define the store, this happends just when you load the app
const store = createStore(reducer, 0);

// Cada vez que alguien ahga un dispatch se ejecua el suscribe
store.subscribe(() => {
  console.warn('New dispatch', store.getState());
  ReactDOM.render(<App count={store.getState()} />, document.getElementById('root'));
});

setInterval(() => {
  store.dispatch({ type: 'ADD', count: 1 });
}, 1000)
