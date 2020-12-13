import profileReducer from "./profile-reducer";
import dialogsReducer from './dialogs-reducer';
import usersReducer from "./friends-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    friendsPage: usersReducer,
    auth: authReducer
});

let store = createStore (reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;