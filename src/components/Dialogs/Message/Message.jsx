import React from "react"
import s from "./../Dialogs.module.css"
import { sendMessageActionCreator, updateMessageAreaActionCreator } from "../../../redux/state";

const Message = (props) => {
    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    };

    let updateMessageArea = () => {
        let text = newMessageElement.current.value;
        let action = (updateMessageAreaActionCreator(text));
        props.dispatch(action);
    }

    return (
        <div>
            <div className={s.message}>
                {props.message}
            </div>
            <div className={s.textarea}>
                <textarea onChange={ updateMessageArea } ref={ newMessageElement } value={ props.updateMessageArea } ></textarea> 
                <button onClick={ sendMessage } > Send </button>
            </div>
        </div>
    );
}


export default Message; 