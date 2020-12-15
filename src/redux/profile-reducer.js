import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [{
            id: 1,
            message: "hello",
            likesCount: 13
        },
        {
            id: 2,
            message: "How are you?",
            likesCount: 23
        },
        {
            id: 3,
            message: "Yo, mazafucka",
            likesCount: 13
        },
    ],
    newPostText: 'Write',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                    newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newMessage
            };

        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        default:
            return state;
    }
}

export const addPost = () => ({
    type: ADD_POST
})

export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newMessage: text
})

export const setUsersProfile = (profile) => ({
    type: SET_USERS_PROFILE,
    profile
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})


export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUsersProfile(data));
        })
    }
}
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data.data));
        })
    }
}
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
            dispatch(setStatus(status));
            }
        })
    }
}

export default profileReducer;