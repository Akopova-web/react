import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

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

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUsersProfile(data));
        })
    }
}
export const getUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.getStatus(status).then(data => {
            dispatch(setUsersProfile(data));
        })
    }
}

export default profileReducer;