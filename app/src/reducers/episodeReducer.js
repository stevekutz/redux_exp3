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