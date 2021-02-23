import profileReducer from "./profile-reducer";
import dialogsReducer from './dialogs-reducer';
import usersReducer from "./friends-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";
const { createStore, combineReducers, applyMiddleware, compose } = require("redux");

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    friendsPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware) ) );

export default store;