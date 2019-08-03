import React from 'react';

import {connect} from 'react-redux';

import {addEpisode} from '../actions/actionsEpisodes';

//import tzImg from './img/twz_01.jpeg';

import tzImg from '../img/twz_01.jpeg';
// point to local file 
// backgroundImage: `url(${tzImg})`,
// point to link
// backgroundImage: `url(https://i1.wp.com/www.thehomicidalhomemaker.com/wp-content/uploads/2018/05/twilight-zone-mystic-seer-candy-box-bw.png)`,

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

        if(this.state.season >= 1  && this.state.title !== '') {
            const newEpisode = {...this.state, id: Date.now() };

            this.props.addEpisode(newEpisode);
            //reset form
            this.setState({title: '', season: 1});
            this.props.history.push('/');
        }  

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
                        type = 'number'
                        onChange = {this.changeHandler}
                        name = 'season'
                        value = {this.state.season}      
                    />

                    <button type = 'submit'> Add</button>
                </form>

                <img src = {tzImg} alt = 'twilightzone' />

            </div>
        )

    }

}

//   no mapStateToProps needed !!


export default connect(
    null,    // must pass in null obj
    {addEpisode}
)(AddEpisode);
