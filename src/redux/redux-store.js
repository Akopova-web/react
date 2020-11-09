import profileReducer from "./profile-reducer";
import dialogsReducer from './dialogs-reducer';
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogPage: dialogsReducer
});

let store = createStore (reducers);

export default store;