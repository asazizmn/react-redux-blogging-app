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

    // copy & return previous state w/ updated checked state 
    // please note the use of the spread syntax
    case 'TOGGLE':
      return { ...state, checked: !state.checked };

    // please note that the reducer function
    // ... must take in current `state` & `action` as parameters
    // ... and return the updated state
    default:
      return state;
  }
};
const store = createStore(reducer);



/*
 * Main React Component
 */
class App extends React.Component {

  // ensure state is initialised before use
  constructor() {
    super();
    this.state = {};
  }

  // react lifecycle method that is called twice
  // ... after the initial render when data has been received
  // ... before displaying the data in the browser
  // deprecated since react 17, use constructor instead
  componentWillMount() {

    // subscribe to the redux store state,
    // ... to listen for any changes to the store
    // ... and execute the provided callback everytime it changes
    // here, we get the new redux store state and update the react state with it
    store.subscribe(() => this.setState(store.getState()));
  }


  // react executes `render` everytime the component's state changes
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
