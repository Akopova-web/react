import React from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./common/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Timetable } from "./components/Timetable/Timetable";
import { initializeApp } from "./redux/app-reducer";
import store from "./redux/redux-store";

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

          <Route exact path="/timetable" render={() => <Timetable />} />

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

let AppContainer = compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);

let MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default MainApp;