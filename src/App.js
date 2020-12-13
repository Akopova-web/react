import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';

const App=(props) => {
  return (
    
      <div className="app-wrapper"> 
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper__content">

          <Route exact path="/profile/:userId?" 
          render={() => <ProfileContainer />} />

          <Route exact path="/login" 
          render={() => <LoginPage />} />

          <Route exact path="/diary" 
          render={() => <div>diary</div> } />

          <Route exact path="/timetable" 
          render={() => <div>timetable</div> } />

          <Route exact path="/dialogs" 
          render={() => <DialogsContainer />} />

          <Route exact path="/friends" 
          render={() => <FriendsContainer /> } />

        </div>
      </div>
  );
}

export default App;
