import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";
import thunkMiddleware  from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./App-reducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store =createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;