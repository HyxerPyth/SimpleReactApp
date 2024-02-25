import React from "react"
import s from "./../Dialogs.module.css"

const Message = (props) => {

    return (
        <div>
            <div className={s.messages}>
                {props.message}
            </div>
            <div>
                <div>
                    <textarea className={s.textarea} placeholder="Type here.." onChange={ props.updateMessageArea } value={ props.updateMessageArea }></textarea>
                </div>
                <div>
                    <button onClick={ props.sendMessage } > Send </button>
                </div>
            </div>
        </div>
    );
}


export default Message; 