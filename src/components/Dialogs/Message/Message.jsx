import React from "react"
import s from "./../Dialogs.module.css"
import { sendMessageActionCreator, updateMessageAreaActionCreator } from "../../../redux/dialogs-reducer";

const Message = (props) => {
    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let clearArea = updateMessageAreaActionCreator("");
        props.dispatch(sendMessageActionCreator());
        props.dispatch(clearArea)
    };

    let updateMessageArea = (e) => {
        let body = e.target.value;
        let action = (updateMessageAreaActionCreator(body));
        props.dispatch(action);
    }

    return (
        <div>
            <div className={s.messages}>
                {props.message}
            </div>
            <div>
                <div>
                    <textarea className={s.textarea} placeholder="Type here.." onChange={ updateMessageArea } ref={ newMessageElement } value={ props.updateMessageArea }></textarea>
                </div>
                <div>
                    <button onClick={ sendMessage } > Send </button>
                </div>
            </div>
        </div>
    );
}


export default Message; 