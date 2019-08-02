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
- Build rest of `action creators`
````
export const toggleEpisode = id => ({type: TOGGLE_EPISODE, payload: id});

export const deleteEpisode = id => ({type: DELETE_EPISODE, payload: id});

export const deleteWatched = id => ({type: DELETE_WATCHED, payload: null}); // may not need null returned!!
   
````

7) Initial Reducer setup
````
import initialStateEpisodes from './favEpisodes'; // arr of obj

/*
export const ADD_EPISODE = 'ADD_EPISODE';
export const TOGGLE_EPISODE = 'TOGGLE_EPISODE';
export const DELETE_EPISODE = 'DELETE_EPISODE';
export const DELETE_WATCHED = 'DELETE_WATCHED';
*/

// define action-types
import {
    ADD_EPISODE,
    TOGGLE_EPISODE,
    DELETE_EPISODE,
    DELETE_WATCHED,
} from '../actions/actionsEpisodes';

// set up initial state
const initialState = {initialStateEpisodes};

// ALWAYS pass in initial state and an action
export default episodeReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_EPISODE:  
            return {
                ...state,
                favEpisodes: [
                    ...state.favEpisodes, action.payload
                ]
            }

        // DONT'FORGET default
        default:
            return state;    
        }

}

````

