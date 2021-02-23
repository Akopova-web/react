import React from 'react';
import Pagination from '../Pagination/Pagination';
import Friend from './Friend';

const Friends = (props) => {
    return <div>
        <Pagination totalItemsCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}
        />

        {props.users.map(u => <Friend key={u.id}
            user={u}
            isFollowingInProgress={props.isFollowingInProgress}
            follow={props.follow} unfollow={props.unfollow} />
        )
        }

    </div>
}

export default Friends;