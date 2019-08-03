import React from 'react';
import styled from 'styled-components';
import {Card} from '@material-ui/core';
import {connect} from 'react-redux';

import {toggleEpisode, deleteEpisode} from '../actions/actionsEpisodes';

// UPDATE to use SemanticUI React
const StyledEpisode = styled(Card)`
  padding: 10px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    text-decoration: ${props => props.textdec};
  }
`;

const Episode = props => {
    console.log('Episode props >> ', props);


    //handlers
    const handletoggleEpisode = () => {
        props.toggleEpisode(props.id)
    }

    // refactored
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

// NOT NEEDED !!!! ????
const mapStateToProps = state => {
   return state;
 };

export default connect(
    mapStateToProps,  // NOT NEEDED ???
//    null,
    {toggleEpisode, deleteEpisode}
)(Episode);
