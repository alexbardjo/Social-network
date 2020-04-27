import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState().dialogsPage;


                let onSendMessageClick = () => {
                    store.dispatch(addMessageActionCreator());
                };

                let onMessageChange = (body) => {

                    store.dispatch(updateNewMessageActionCreator(body));
                };
        return <Dialogs updateNewMessageBody={onMessageChange}
                     sendMessage={onSendMessageClick}
                     dialogsPage={state}/>
            }
        }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;