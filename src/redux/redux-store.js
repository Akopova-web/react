import profileReducer from "./profile-reducer";
import dialogsReducer from './dialogs-reducer';
import usersReducer from "./friends-reducer";
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    friendsPage: usersReducer
});

let store = createStore (reducers);

export default store;