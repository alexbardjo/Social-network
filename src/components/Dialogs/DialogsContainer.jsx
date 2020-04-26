import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage


    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (body) => {

        props.store.dispatch(updateNewMessageActionCreator(body));
    };


    return (<Dialogs updateNewMessageBody={onMessageChange}
                     sendMessage={onSendMessageClick}
                     dialogsPage={state}/>)
};

export default DialogsContainer;