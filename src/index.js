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
  // one of the "gotchas" of using this is that
  // ... due to the asynchronous nature of react
  // ... the component does NOT wait for this to execute before rendering
  // ... therefore it will only render properly on second render
  // deprecated since react 17, use constructor instead
  componentWillMount() {

    // subscribe to the redux store state,
    // ... to listen for any changes to the store
    // ... and execute the provided callback everytime it changes
    // here, we get the new redux store state and update the react state with it
    store.subscribe(() => this.setState(store.getState()));

    // however, it should be noted that the event listener
    // ... will only execute the callback when `dispatch` happens
    // ... therefore, without it even the initial state creation won't happen
    // within the render function below, it is only showing react's state
    // ... which is still "false", as it hasn't taken from the redux store yet
  }


  // react executes `render` everytime the react component's state changes
  render() {

    const onClick = () => store.dispatch({ type: 'TOGGLE' });

    return (
      <div>
        <h1>Todos</h1>
        <div>
          <input type="checkbox" checked={!!this.state.checked} onClick={onClick} />
          &nbsp; Learn Redux
        </div>
        {this.state.checked ? (<h2>Done!</h2>) : null}
      </div>
    );
  }
}



// render main component and insert code in html
ReactDOM.render((
  <App />
), document.getElementById('root'));
