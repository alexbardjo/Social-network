import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";



const AddMessageForm = (props) => {

    return (
        <form>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder='Enter your message' name='newMessageBody' component='textarea'/>
                </div>
                <div>
                    <button>Add Message</button>
                </div>
            </form>
        </form>
    )
};
const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img} key={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);


    const addNewMessage = (formData) => {
        props.sendMessage(formData.newMessageBody)
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
};

export default Dialogs;