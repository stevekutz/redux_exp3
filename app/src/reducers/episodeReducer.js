import episodesInit from './favEpisodes'; // arr of obj

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
    UPDATE_EPISODE,
    
} from '../actions/actionsEpisodes';

// set up initial state
// const initialState = {initialStateEpisodes};
const initialState = {episodesInit};

// ALWAYS pass in initial state and an action
export const episodeReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_EPISODE:  
            return {
           //     ...state,   // NOT needed, we spread in existing state and append payload
                episodesInit: [
                    ...state.episodesInit, action.payload
                ]
            };
   /*     
        case TOGGLE_EPISODE:
            const changedList = state.episodes.map( episode => {
                if(Number(episode.id) === Number(action.payload)) {
                    episode.watched = ! episode.watched;
                }
                return episode; // return as is if untoggled
            });

            return { episodes: changedList};
    */

        case TOGGLE_EPISODE:
            return {
        //        ...state,
        // pisodes: state.episodes.map(episode => {
                episodesInit: state.episodesInit.map(episode => {
                    if(Number(episode.id) === Number(action.payload)) return {...episode, watched: !episode.watched}
                    return episode;          
                })
            }    
             
         case DELETE_EPISODE:
            return {
                //episodes: state.episodesInit.filter(
                episodesInit: state.episodesInit.filter(
                    episode => episode.id !== action.payload
                )
            };   

        case DELETE_WATCHED:
            return {
                episodesInit: state.episodesInit.filter(episode => !episode.watched)
            };        


        case UPDATE_EPISODE:
            return {
                episodesInit: [
                    ...state.episodesInit, action.payload
                ]
            }    

        // DONT'FORGET default
        default:
            return state;    
        }

}

export default episodeReducer;