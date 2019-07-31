# Basic Redux experiments 3

1) Set up app `create-react-app` app
2) Add dependencies
    - `yarn add react-redux redux @material-ui/core styled-components react-router-dom` 
3) Resolved lodash security warnings by adding into app folder

    - `yarn add lodash lodash.template`

### Set up Router & Reddux in `index.js`
    ````
    import {Provider} from 'react-redux';
    import {createStore} from 'redux';
    import {BrowserRouter as Router} from 'react-router-dom';

    import rootReducer from './reducers';
    //const store = createStore(rootReducer);  // old way

    // Needed for Redux DevTools state debugging in Chrome!
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

    ````


### `rootReducer`
    ````
    import {combineReducers} from 'redux';

    export default combineReducers({
        // leaving room for specific reducers here

    });
    ````

