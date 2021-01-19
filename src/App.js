import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./common/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { initializeApp } from "./redux/app-reducer";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper__content">
          <Route
            exact
            path="/profile/:userId?"
            render={() => <ProfileContainer />}
          />

          <Route exact path="/login" render={() => <LoginPage />} />

          <Route exact path="/diary" render={() => <div>diary</div>} />

          <Route exact path="/timetable" render={() => <div>timetable</div>} />

          <Route exact path="/dialogs" render={() => <DialogsContainer />} />

          <Route exact path="/friends" render={() => <FriendsContainer />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);
