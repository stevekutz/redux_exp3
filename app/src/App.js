import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import {Route, NavLink} from 'react-router-dom';

import Episodes from './components/Episodes';
import AddEpisode from './views/AddEpisode';



/*
function App() {
  return (
    <div className="App">
      <h1> Get ready to build some Routes!!!!</h1>
        <Route 
          path = '/'
          render = { () => (
            <h4>
              <h3> Twilight Zone Fav Episodes </h3>
              <nav>
                <NavLink to = '/'> Home </NavLink>
                <NavLink to = '/addEpisodeRoute'> Add Episode</NavLink>
              </nav> 
            </h4>
          )}

        />
        
        <Route  
          exact path = '/' 
          component = {props => <Episodes {...props} />} 
        />

        <Route 
          path = '/addEpisodeRoute' 
          component = {props => <AddEpisode {...props} />}    
        />

    </div>
  );
}
*/

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Get ready to build some Routes!!!!</h1>
          <Route 
            path = '/'
            render = { () => (
              <div>
                <h3> Twilight Zone Fav Episodes </h3>
                <nav>
                  <NavLink to = '/'> Home </NavLink>
                  <NavLink to = '/addEpisodeRoute'> Add Episode</NavLink>
                </nav> 
              </div>
            )}
  
          />
          
          <Route  
            exact path = '/' 
            component = {props => <Episodes {...props} />} 
          />
  
          <Route 
            path = '/addEpisodeRoute' 
            component = {props => <AddEpisode {...props} />}    
          />
  
      </div>
    );



  }


}

export default App;
