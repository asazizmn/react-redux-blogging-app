/**
 * App.js
 * - the main App component
 */



import React from 'react';



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
  // ... once on the server
  // ... and once on the client, just before displaying the data in the browser
  //
  // one of the "gotchas" of using this is that
  // ... due to the asynchronous nature of react
  // ... the component does NOT wait for this to execute before rendering
  // ... therefore it will only render properly on second rendering
  //
  // deprecated since react 17, use constructor instead
  componentWillMount() {

    // subscribe to the redux store state,
    // ... to listen for any changes to the store
    // ... and execute the provided callback everytime it changes
    //
    // here, we get the new redux store state and update the react state with it
    // please note that this manual binding is only for demonstration purposes
    // ... it is normally prefered to use `rect-redux` to help with this
    store.subscribe(() => this.setState(store.getState()));

    // however, it should be noted that the event listener
    // ... will only execute the callback when `dispatch` happens
    // ... therefore, without it the binding of redux state into react state won't happen
    //
    // within the render function below, it is only showing react's state
    // ... which is still "false", as it hasn't taken from the redux store yet
  }


  // react executes `render` everytime the react component's state changes
  render() {

    // this is an event listener for the click event
    // it will be triggerred accordingly bound to the checkbox input
    const onClick = () => store.dispatch({ type: 'TOGGLE' });

    return (
      <div>
        <h1>Todos</h1>
        <div>
          Learn Redux
          <input
            type="checkbox"
            checked={!!this.state.checked}
            onClick={onClick}
          />
        </div>
        {this.state.checked ? (<h2>Done!</h2>) : null}
      </div>
    );
  }
}

