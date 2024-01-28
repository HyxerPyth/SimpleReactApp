import React from "react";
import Dialogs from "./Dialogs";
import { sendMessageActionCreator, updateMessageAreaActionCreator } from "../../redux/dialogs-reducer";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessage = () => {
        let clearArea = updateMessageAreaActionCreator("");
        props.store.dispatch(sendMessageActionCreator());
        props.dispatch(clearArea)
    };

    let updateMessageArea = (body) => {
        props.store.dispatch.updateMessageAreaActionCreator(body);
    }

    return  <Dialogs updateMessageArea={ updateMessageArea } sendMessage={ onSendMessage } dialogsPage={ state }/>
}


export default DialogsContainer; 