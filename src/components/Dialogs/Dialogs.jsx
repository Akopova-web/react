import React from "react";
import { NavLink } from "react-router-dom";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";



const Dialogs = (props) => {
debugger;
    let state = props.store.getState().dialogPage;
    console.log(state)

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} />);
    let newMessageBody = state.newMessageBody;

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={classes.dialogs}>
            
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your messages'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;