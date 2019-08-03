import episodes from './favEpisodes'; // arr of obj

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
// const initialState = {initialStateEpisodes};
const initialState = {episodes};

// ALWAYS pass in initial state and an action
export const episodeReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_EPISODE:  
            return {
     //           ...state,   // needed?
                episodes: [
                    ...state.episodes, action.payload
                ]
            };
        
        case TOGGLE_EPISODE:
            const changedList = state.episodes.map( episode => {
                if(Number(episode.id) === Number(action.payload)) {
                    episode.watched = ! episode.watched;
                }
                return episode; // return as is if untoggled
            });

            return { episodes: changedList};

         case DELETE_EPISODE:
            return {
                episodes: state.episodes.filter(
                    episode => episode.id !== action.payload
                )
            };   

        case DELETE_WATCHED:
            return {
                episodes: state.episodes.filter(episode => !episode.watched)
            };        


        // DONT'FORGET default
        default:
            return state;    
        }

}

export default episodeReducer;