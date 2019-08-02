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

    //handlers
    const handletoggleEpisode = () => {
        props.toggleEpisode(props.id)
    }

    // refactored
    const handleDelete = () => props.deleteEpisode(props.id);

    return(
        <StyledEpisode>
            
        
        </StyledEpisode>
    )

}
