import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App=(props) => {
  return (
    
      <div className="app-wrapper"> 
        <Header />
        <Navbar />
        <div className="app-wrapper__content">

          <Route exact path="/profile" 
          render={() => <Profile />} />

          <Route exact path="/dialogs" 
          render={() => <DialogsContainer />} />

        </div>
      </div>
  );
}

export default App;
