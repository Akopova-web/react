import Axios from 'axios';
import React from 'react';
import classes from './Friends.module.css';
import userPhoto from '../../assets/Images/empty_avatar.png';

class Friends extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(Response => {
            debugger;
            this.props.setUsers(Response.data.items);
        })
    }
    render() {
        return <div>
            {
                this.props.users.map((u) => {
                    return <div key={u.id}>
                        <span>
                            <div>
                                <img className={classes.usersPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                            </div>
                        </span>

                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                    </div>

                })}
        </div>
    }
}

export default Friends;