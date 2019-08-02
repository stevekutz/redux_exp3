export const ADD_EPISODE = 'ADD_EPISODE';
export const TOGGLE_EPISODE = 'TOGGLE_EPISODE';
export const DELETE_EPISODE = 'DELETE_EPISODE';
export const DELETE_WATCHED = 'DELETE_WATCHED';

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

export const toggleEpisode = id => ({type: TOGGLE_EPISODE, payload: id});

export const deleteEpisode = id = ({type: DELETE_EPISODE, payload: id});

export const deleteWatched = id = ({type: DELETE_WATCHED, payload: null}); // may not need null returned!!
 
