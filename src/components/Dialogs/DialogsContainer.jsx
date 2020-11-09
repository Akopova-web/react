import React from "react";
import { NavLink } from "react-router-dom";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";



const DialogsContainer = () => {

    return (
        <StoreContext.Consumer> 
            {
            (store) => { 
                let state = store.getState().dialogPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }
                return (
                <Dialogs sendMessage={onSendMessageClick} updateNewMessage={onNewMessageChange}
                    dialogs={state.dialogs} messages={state.messages} newMessageBody={state.newMessageBody}
                />)
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;