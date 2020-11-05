const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
    getState () {
        return this._state;
    },
    _callSubscriber() {
        console.log ('all is good')
    }, 
    
    subscribe(observer) {
        this._callSubscriber=observer;
        },

        dispatch (action) {
            if (action.type === ADD_POST) {
                let newPost = {
                    id: 4,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                };
    
                this._state.profilePage.posts.unshift(newPost);
                this._state.profilePage.newPostText = ' ';
                this._callSubscriber(this._state);             //вызывает перерисовку
            }
            else if (action.type === UPDATE_NEW_POST_TEXT) {
                this._state.profilePage.newPostText = action.newMessage;
                this._callSubscriber(this._state);
            }
            else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
                this._state.dialogPage.newMessageBody = action.body;
                this._callSubscriber(this._state);
            }
            else if (action.type === SEND_MESSAGE) {
                let body = this._state.dialogPage.newMessageBody;
                this._state.dialogPage.newMessageBody = '';
                this._state.dialogPage.messages.push( {id: 4, message: body} );
                this._callSubscriber(this._state);
            }
        }
}

export const addPostActionCreator = () => ({ type:  ADD_POST })
  
export const updateNewPostTextActionCreator = (text) => ({
      type: UPDATE_NEW_POST_TEXT, newMessage: text })

export const sendMessageCreator = () => ({ type:  SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body })

window.store = store;

export default store;