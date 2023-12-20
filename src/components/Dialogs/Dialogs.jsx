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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Peter" id="1"/>
                <DialogItem name="Tom" id="2"/>
                <DialogItem name="Donald" id="3"/>
                <DialogItem name="Nick" id="4"/>
                <DialogItem name="Jack" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="What's new?"/>
                <Message message="What's up"/>
            </div>
        </div>
    );
}


export default Dialogs; 