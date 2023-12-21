import React from "react"
import s from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

const setActive = ({isActive}) => ({color: isActive ? "blue" : "var(--color-active)"});

const DialogItem = (props) => {

    let path = "/dialogs" + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1,name: "Peter"}, 
        {id: 2,name: "Tom"},
        {id: 3,name: "Donald"},
        {id: 4,name: "Nick"},
        {id: 5,name: "Jack"} 
    ]

    let messages= [
        {id: 1,message: "Hi"},
        {id: 2,message: "What's new?"},
        {id: 3,message: "What's up, bro!"}
    ]

    let dialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/> );

    let messagesElements = messages.map( m => <Message message={m.message}/> );

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