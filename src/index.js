import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store';


ReactDOM.render(
  <App />,
  document.getElementById('root')
  );
  
  
  let title = Array.from(document.getElementsByTagName('h3'));
  console.log(title[0]);
  store.subscribe (() => {
    let state = store.getState().countReducer.count;
    console.log(state)
    title[0].textContent = state; 
  })
  