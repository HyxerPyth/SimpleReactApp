import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const setActive = ({isActive}) => ({color: isActive ? "#0071e3" : "var(--color-active"});

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map( d => <DialogItem key={d.id} name={d.name} id={d.id} style={setActive}/> );
    let messagesElements = state.messages.map( m => <Message key={m.id} message={m.message} dispatch={props.dispatch} updateMessageArea={ state.updateMessageArea } sendMessage={props.sendMessage}/> );

    let newMessageElement = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    };

    let updateMessageArea = (e) => {
        let body = e.target.value;
        props.updateMessageArea(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements} 
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
            </div>
        </div>
    );
}


export default Dialogs; 