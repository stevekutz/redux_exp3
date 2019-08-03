import React from 'react';
import styled from 'styled-components';
import {Card} from '@material-ui/core';
import {connect} from 'react-redux';

import {toggleEpisode, deleteEpisode} from '../actions/actionsEpisodes';

// UPDATE to use SemanticUI React
const StyledEpisode = styled(Card)`
  color: 4px solid green;  
  padding: 5px;
  margin: 20px 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    border: 1px solid purple;
    color: darkblue;
    text-decoration: ${props => props.textdec};
    text-decoration-color: darkslategrey;
    text-decoration-style: wavy;
    padding: 2px;
    margin: 0;
  }
`;

const Episode = props => {

/*
    //handlers
    const handletoggleEpisode = () => {
        props.toggleEpisode(props.id)
    }
*/
    // refactored
    const handletoggleEpisode = () => props.toggleEpisode(props.id);

    const handleDelete = () => props.deleteEpisode(props.id);

    return(
        <StyledEpisode textdec = {props.watched ? 'line-through' : 'none'}> 
            <h3 onClick = {handletoggleEpisode}>
                Title: {props.title}  Season: {props.season}
            </h3>

        <button onClick  = {handleDelete}> Delete</button>
        </StyledEpisode>
    )
}

/*
// NOT NEEDED !!!! ????
const mapStateToProps = state => {
   return state;
 };

export default connect(
    mapStateToProps,  // NOT NEEDED ???
//    null,
    {toggleEpisode, deleteEpisode}
)(Episode);
*/


// NO state variables, just passing prop info  & calling action creators 
// but must pass in null obj instead of leaving undefined
export default connect( null, { toggleEpisode, deleteEpisode })(Episode);
