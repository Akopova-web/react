const {
    default: dialogsReducer
} = require("./dialogs-reducer");
const {
    default: profileReducer
} = require("./profile-reducer");

    let store = {
        _state: {
            profilePage: {
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
            },
            dialogPage: {
                dialogs: [{
                        id: 1,
                        name: "Oleg"
                    },
                    {
                        id: 2,
                        name: "Andrew"
                    },
                    {
                        id: 3,
                        name: "Dashka"
                    }

                ],
                messages: [{
                        id: 1,
                        message: "hello"
                    },
                    {
                        id: 2,
                        message: "How are you?"
                    },
                    {
                        id: 3,
                        message: "Yo, mazafucka"
                    }
                ],
                newMessageBody: ''
            }
        },
        getState() {
            return this._state;
        },
        _callSubscriber() {
            console.log('all is good')
        },

        subscribe(observer) {
            this._callSubscriber = observer;
        },

        dispatch(action) {
            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
            this._callSubscriber(this._state);
        }
    }

        window.store = store;

        export default store;