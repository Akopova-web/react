import React from 'react';
import classes from './Friends.module.css';
import userPhoto from '../../assets/Images/empty_avatar.png';
import { NavLink } from 'react-router-dom';

const Friend = ({ user, isFollowingInProgress, follow, unfollow }) => {
    return <div>
        <div className={classes.followingButtons}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img alt="" className={classes.usersPhoto} src={user.photos.large != null ? user.photos.large : userPhoto} />
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }}>Unfollow</button>

                    : <button disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>Follow</button>
                }
            </div>
        </div>

        <div className={classes.info}>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{user.id}</div>
                <div>{user.uniqueUrlName}</div>
            </span>
        </div>
    </div>
}


export default Friend;