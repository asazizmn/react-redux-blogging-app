/**
 * App.js
 * - the main App component
 */



import React from 'react';
import { connect } from 'react-redux';



/*
 * is used to access specific states from the store
 */
const mapStateToProps = state => ({
  appName: state.appName
});



/*
 * Main React Component
 */
class App extends React.Component {

  // react executes `render` everytime the react component's state changes
  render() {
    return (
      <div>
        {this.props.appName}
      </div>
    );
  }
}

