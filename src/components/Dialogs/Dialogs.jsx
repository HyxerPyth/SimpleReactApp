import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const setActive = ({isActive}) => ({color: isActive ? "#0071e3" : "var(--color-active"});

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map( d => <DialogItem key={d.id} name={d.name} id={d.id} style={setActive}/> );
    let messagesElements = props.state.messages.map( m => <Message key={m.id} message={m.message} dispatch={props.dispatch} updateMessageArea={ props.updateMessageArea }/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements} 
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}


export default Dialogs; 