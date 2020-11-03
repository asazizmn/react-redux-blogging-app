/**
 * index.js
 * - react and redux starting point
 */


import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';



/*
 * Redux Store/State & Reducer
 * create store (state) that represents the state of a checkbox 
 * and a corresponding reducer that allows "toggling" it
 */
const defaultState = { checked: false };
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      // copy & return previous state w/ updated checked state 
      // please note the use of the spread syntax
      return { ...state, checked: !state.checked };
  }
  // please note that the reducer must take in current `state` & `action`
  // and return the updated state
  return state;
};
const store = createStore(reducer);



/*
 * Main React Component
 */
class App extends React.Component {
  render() {
    return (
      <h1>Hello, World!</h1>
    );
  }
}



// render main component and insert code in html
ReactDOM.render((
  <App />
), document.getElementById('root'));
