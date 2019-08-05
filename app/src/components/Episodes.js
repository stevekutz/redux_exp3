import React from 'react';
import {connect} from 'react-redux';

import {deleteWatched} from '../actions/actionsEpisodes';

import Episode from './Episode';
import './episodes.css';

import UpdateEpisodes from '../views/UpdateEpisode';



const Episodes = props => {
 //   {props.episodes.map( (episode, index) => (

//     console.log('props Eppisodes ', props);
    return (
        <div className = 'episodesContainer'>

        {props.episodesProp.map( (episode, index) => (
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
            
        <UpdateEpisodes />
            
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
// const mapStateToProps = state => ({episodes: state.episodes.episodes});
const mapStateToProps = state => ({episodesProp: state.episodes.episodesInit});


export default connect(
        mapStateToProps,
        {deleteWatched} // action creator
)(Episodes);