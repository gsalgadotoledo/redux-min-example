import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// Aqui se renderiza por primera vez el componente
const App = (props) => <h1>Hello... {props.count} </h1>
ReactDOM.render(<App count="0" />, document.getElementById('root'));

// STATE: Son los datos de la aplicacion

// Aqui se declara como se debe modificar 
// el STATE cada vez que invocan una accion
const reducer = (state, action) => {
  if (action.type === 'SUMAR') {
    return state + action.count;
  }
  return state;
};

// El store es donde se definen los reducers, solo pasa solo una vez
const store = createStore(reducer, 0);

// Cada vez que alguien ahga un dispatch se ejecua el suscribe
store.subscribe(() => {
  console.warn('New dispatch', store.getState());
  ReactDOM.render(<App count={store.getState()} />, document.getElementById('root'));
});

setInterval(() => {
  store.dispatch({ type: 'SUMAR', count: 1 });
}, 1000)
