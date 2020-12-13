import React from 'react';
import classes from './Friends.module.css';
import userPhoto from '../../assets/Images/empty_avatar.png';
import { NavLink } from 'react-router-dom';

let Friends = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p && classes.selectedPage}
                onClick={() => { props.onPageChanged(p) }}>{p}</span>
        })}

        {
            props.users.map((u) => {
                return <div key={u.id}>
                    <div className={classes.followingButtons}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={classes.usersPhoto} src={u.photos.large != null ? u.photos.large : userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button type="button" className="btn btn-light" disabled={props.isFollowingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>

                                : <button type="button" className="btn btn-light" disabled={props.isFollowingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </div>

                    <div className={classes.info}>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </div>
                </div>

            })}
    </div>
}

export default Friends;