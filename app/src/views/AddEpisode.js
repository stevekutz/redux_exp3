import React from 'react';

import {connect} from 'react-redux';

import {addEpisode} from '../actions/actionsEpisodes';

class AddEpisode extends React.Component{
    state = {
        title: '',
        season: 1,
        watched: false,
    }

    changeHandler = ev => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    submitNewEpisode_h = ev => {
        ev.preventDefault();

        const newEpisode = {...this.state, id: Date.now() };

        this.props.addEpisode(newEpisode);
        //reset form
        this.setState({title: '', season: 1});
        this.props.history.push('/');
    };
    
    render() {
        return (
            <div className = 'addEpisodeContainer'>

                <form onSubmit = {this.submitNewEpisode_h}>
                    <input
                        type = 'text'
                        placeholder = 'add here'
                        onChange = {this.changeHandler}
                        name = 'title'
                        value = {this.state.title}
                    />

                    <input
                        type = 'text'
                        onChange = {this.changeHandler}
                        name = 'season'
                        value = {this.state.season}      
                    />

                    <button type = 'submit'> Add</button>
                </form>
            </div>
        )

    }

}

export default connect(
    null,
    {addEpisode}
)(AddEpisode);
