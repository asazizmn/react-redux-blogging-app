/**
 * index.js
 * - react and redux starting point
 */



import ReactDOM from 'react-dom';
import React from 'react';

// Redux Imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';



// Redux State
const defaultState = {
  appName: 'conduit',
  articles: null
};

// Redux Reducer
const reducer = (state = defaultState, action) => {
  return state;
};

// Redux Store
const store = createStore(reducer);



// render main component and insert code in html
// pls nt that the `Provider` component is how to tell `react-redux` about your store
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
