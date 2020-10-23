import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={classes.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

let dialogsData = [
    { id: 1, name: "Oleg" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Dashka" }

]

let messagesData = [
    { id: 1, message: "hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo, mazafucka" }
]

let dialogsElements = dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
let messagesElements = messagesData
    .map(message => <Message message={message.message} />);

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs;