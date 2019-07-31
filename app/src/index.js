import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';

import rootReducer from './reducers';
//const store = createStore(rootReducer);

// Needed for Redux DevTool state debugging in Chrome!
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


ReactDOM.render(
  <Provider store = {store}> 
    <Router>
        <App/>
    </Router>
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
