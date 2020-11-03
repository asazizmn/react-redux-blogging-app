/**
 * index.js
 * - react and redux starting point
 */


import ReactDOM from 'react-dom';
import React from 'react';



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
