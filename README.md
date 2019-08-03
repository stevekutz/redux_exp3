# Basic Redux experiments 3

1) Set up app `yarn create react-app` app
2) Add dependencies
    - `yarn add react-redux redux @material-ui/core styled-components react-router-dom` 
3) Resolved lodash security warnings by adding into app folder

    - `yarn add lodash lodash.template`

4) Set up Router & Redux in `index.js`
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


5) Build basic `rootReducer`
    ````
    import {combineReducers} from 'redux';

    export default combineReducers({
        // leaving room for specific reducers here

    });
    ````
6) Setup `action creators`

### NOTE refactoring of the `action creator`

````
export const ADD_EPISODE = "ADD_EPISODE";

// orig
export const addEpisode = newEpisode => {
    return {
        type: ADD_EPISODE,
        payload: newEpisode
    }
};

// cleaner
export const addEpisode = newEpisode => (
        { type: ADD_EPISODE,
          payload: newEpisode  
        }    
);

// sleek
export const addEpisode = newEpisode => ({type: ADD_EPISODE, payload: newEpisode});
````

7)  Build rest of `action creators`

    export const toggleEpisode = id => ({type: TOGGLE_EPISODE, payload: id});

    export const deleteEpisode = id => ({type: DELETE_EPISODE, payload: id});

    export const deleteWatched = id => ({type: DELETE_WATCHED, payload: null}); // may not need null returned!!
    
    ````

7) Build Reducers & wire into combineReducers
    ````
    import {combineReducers} from 'redux';

    import episodeReducer from './episodeReducer';

    export default combineReducers({
        episodes: episodeReducer
    });

    ````

8) ## SPECIAL 
### Recall that the connect is implemented via  with currying (`invoking connect twice`)


<div style = 'border: 1px solid deeppink'>
    <h3 style = 'font-weight: bold'> React & Redux DevTools </h3>
    <div style = 'display: flex; justify-content: space-evenly; margin: 10px '>    
        <img  style = 'margin: 10px' src = 'app/src/img/md/Episodes_React_DevTools.png' alt = 'Episodes-ReactDevTools' width = 30% height = 100%/>
        <img style = 'margin: 10px'  src = 'app/src/img/md/Episode_React_DevTools.png' alt = 'Episode-ReactDevTools' width = 30% height = 100%/>
        <img style = 'margin: 10px' src = 'app/src/img/md/AddEpisode_React_DevTools.png' alt = 'AddEpisode-ReactDevTools' width = 30% height = 100%/>
    </div>
    <h3 style = 'font-weight: bold'> Redux Log Monitor</h3> 
    <div style = 'display: flex; align-items: flex-start'>
        <img style = 'margin: 10px'  src = 'app/src/img/md/Redux_DevTools_LogMonitor.png' alt = 'ReduxDevTools_logger' width = 30% height = 50%/>
        <img style = 'margin: 10px' src = 'app/src/img/md/Redux_DevTools_initial.png' alt = 'Redux_DevTools'  width  = 30% height = 50%/>
    </div>

</div>


````
     export default connect( null, { toggleEpisode, deleteEpisode })(Episode);
 ````
    -  In `Episode` component the first time, we did NOT pass any part of state tree in mapStateToProps 

