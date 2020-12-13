import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { getUserProfile, getUserStatus } from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2
    };
    this.props.getUserProfile(userId)
//    this.props.getUserStatus(status)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
};


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})


export default compose (
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
) (ProfileContainer);