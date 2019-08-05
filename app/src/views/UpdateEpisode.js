import React from 'react';

import {connect} from 'react-redux';
import {updateEpisode} from '../actions/actionsEpisodes';
import { Button} from "semantic-ui-react";

class UpdateEpisode extends React.Component {
    state = {
        id: this.props.episodesInit.id,
        title: this.props.episodesInit,
        season: this.props.episodesInit.season,
        watched: this.props.episodesInit.watched,
    }

    changeHandler = ev => {
        this.setState({
                [ev.target.name] : ev.target.value
            })
    }

    submitUpdatedEpisode = (ev, id ) => {

        const updated = {...this.state, id: id}

        this.props.updateEpisode(updated);
    };

    render() {
         return (
            <div>
                <form onSubmit = {this.updateEpisode}>
                    <input
                        type = 'text'
                        onChange = {this.changeHandler}
                        name = 'title'
                        value = {this.state.title}
                    />
                
                </form>
                <Button type = 'submit'>Update</Button>
            </div>
         )   

    }

}

export default connect(null, {updateEpisode})(UpdateEpisode);
