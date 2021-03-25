import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { changePhoto, getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {

  updateProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedId;
    };
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  componentDidMount() {
    this.updateProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.updateProfile()
    }
  }

  render() {
    return (
      <Profile {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        changePhoto={this.props.changePhoto}
      />
    );
  }
};


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedId: state.auth.id,
  isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, changePhoto }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);