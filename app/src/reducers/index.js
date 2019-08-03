import {combineReducers} from 'redux';

import episodeReducer from './episodeReducer';

export default combineReducers({
    episodes: episodeReducer
});