import React from 'react';
import { connect } from "react-redux";
import { follow, unfollow, toggleIsFollowingProgress, getUsers } from "../../redux/friends-reducer";
import Friends from "./Friends";
import Preloader from '../../common/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

class FriendsContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null}
            <Friends totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                isFollowingInProgress={this.props.isFollowingInProgress}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
        isFollowingInProgress: state.friendsPage.isFollowingInProgress
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, toggleIsFollowingProgress, getUsers
    }),
    withAuthRedirect
)(FriendsContainer);