import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import tzImg from './img/twz_01.jpeg';

import {Route, NavLink} from 'react-router-dom';

import Episodes from './components/Episodes';
import AddEpisode from './views/AddEpisode';
// import { url } from 'inspector';

// app/src/img/twz_01.jpeg

// point to local file 
// backgroundImage: `url(${tzImg})`,
// point to link
// backgroundImage: `url(https://i1.wp.com/www.thehomicidalhomemaker.com/wp-content/uploads/2018/05/twilight-zone-mystic-seer-candy-box-bw.png)`,
function App() {
  return (
    <div className="App"
      style={{
        backgroundImage: `url(${tzImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '90%',
        margin: "5px auto",
        position: "absolute",
        zIndex : "-1",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
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
