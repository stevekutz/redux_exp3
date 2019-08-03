import React from 'react';
import {connect} from 'react-redux';

import {deleteWatched} from '../actions/actionsEpisodes';

import Episode from './Episode';
import './episodes.css';

const Episodes = props => {

    return (
        <div className = 'episodesContainer'>
            {props.episodes.map( (episode, index) => (
                <Episode
                    key = {index}
                    {...episode}
                />
            ))}

            <button                 // NOT props.deleteWatched
               onClick = { () => {props.deleteWatched() } }          
            >              
                Delete Watched
            </button>            
        </div>


    )
}

/*
// orig
const mapStateToProps = state => {
    return {
       // episodes: state.episodes // as initialState in reducer
       episodes: state.episodes.episodes
    }
};
*/
/*
// cleaner
const mapStateToProps = state => (
    {episodes: state.episodes.episodes}
);
*/

// sleek
const mapStateToProps = state => ({episodes: state.episodes.episodes});


export default connect(
        mapStateToProps,
        {deleteWatched} // action creator
)(Episodes);