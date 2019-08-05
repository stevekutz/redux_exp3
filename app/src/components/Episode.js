import React from 'react';
import styled from 'styled-components';
import {Card, Button} from '@material-ui/core';
import {connect} from 'react-redux';

import {toggleEpisode, deleteEpisode} from '../actions/actionsEpisodes';

// UPDATE to use SemanticUI React
const StyledEpisode = styled(Card)` 
  margin: 20px 0;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  .contentbox {
    width: 50%;
    display: flex;
    align-items: center;

        h3 {
            color: darkblue;
            text-decoration: ${props => props.textdec};
            text-decoration-color: darkslategrey;
            text-decoration-style: wavy;
            padding: 2px;
            margin: 0 10px;
        }

  }  
  Button{
    border: 1px solid deeppink;
    margin: 5px;
  }
  Button:hover {
    border: 1px solid lightgreen;
    color: green;
  }

`;

const Episode = props => {
    console.log('Episode props >>>', props);
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
        <div>
            <StyledEpisode textdec = {props.watched ? 'line-through' : 'none'}> 
            <div className = 'contentbox'>   
                <h3 onClick = {handletoggleEpisode}>
                    Title: {props.title}  Season: {props.season}
                </h3>
                       {props.watched ? "🙀" : "😌"}
            </div>    
            <Button onClick  = {handleDelete}
            variant="contained" color="primary"
            > Delete</Button>
            </StyledEpisode>
        </div>
    )
}

/*
// NOT NEEDED !!!! 
const mapStateToProps = state => {
   return state;
 };

export default connect(
    mapStateToProps,  // NOT NEEDED
//    null,
    {toggleEpisode, deleteEpisode}
)(Episode);
*/


// NO state variables, just passing prop info  & calling action creators 
// but must pass in null obj instead of leaving undefined
export default connect( null, { toggleEpisode, deleteEpisode })(Episode);
