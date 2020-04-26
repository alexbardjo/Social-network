import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/Redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <App store={store} state={state} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

serviceWorker.unregister();
