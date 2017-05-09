import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import allTodos from './reducers/selectors';
import Root from './components/root';


const store = configureStore();

document.addEventListener("DOMContentLoaded", function(){
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

window.store = store;
window.allTodos = allTodos;
