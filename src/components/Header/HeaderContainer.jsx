import React from "react";
import { connect } from "react-redux";
import { authUser } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authUser()
  }
  render() {
    return <Header {...this.props} />
  }
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, { authUser })(HeaderContainer);