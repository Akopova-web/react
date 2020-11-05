
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import store from './redux/state';

const App=(props) => {
  return (
    
      <div className="app-wrapper"> 
        <Header />
        <Navbar />
        <div className="app-wrapper__content">

          <Route exact path="/profile" 
          render={() => <Profile 
          profilePage={props.state.profilePage} 
          dispatch={props.dispatch} 
          />} />

          <Route exact path="/dialogs" 
          render={() => <Dialogs 
          store = {props.store}
          />} />

        </div>
      </div>
  );
}

export default App;
