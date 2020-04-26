import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/Dialogs-reducer";


const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);


    let newPostElement = React.createRef(); // создание ссылки

    let onSendMessageClick = () => {
       props.sendMessage();
    };

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea placeholder={'Enter your message'} onChange={onMessageChange} value={props.dialogsPage.newMessageText}></textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Add Message</button>
            </div>
        </div>
    )
};

export default Dialogs;