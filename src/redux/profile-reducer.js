const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
newPostText: 'darov'
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };

            state.posts.unshift(newPost);
            state.newPostText = ' ';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newMessage;
            return state;

        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newMessage: text
})

export default profileReducer;