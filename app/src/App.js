import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {Route, NavLink} from 'react-router-dom';

import Episodes from './components/Episodes';

// point to local file 
// backgroundImage: `url(${tzImg})`,
// point to link
// backgroundImage: `url(https://i1.wp.com/www.thehomicidalhomemaker.com/wp-content/uploads/2018/05/twilight-zone-mystic-seer-candy-box-bw.png)`,

import AddEpisode from './views/AddEpisode';

function App() {
  return (
    <div className="App">
        <Route 
          path = '/'
          render = { () => (
            <div>
              <h2> Twilight Zone Fav Episodes </h2>
              <nav>
                <NavLink to = '/'
  
                
                > Home </NavLink>
                <NavLink to = '/addEpisodeRoute' 

                  > Add Episode</NavLink>
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

/*
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
*/
export default App;
