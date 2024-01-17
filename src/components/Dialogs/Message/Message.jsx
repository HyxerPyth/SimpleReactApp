import React from "react"
import s from "./../Dialogs.module.css"

const Message = (props) => {

    let newMessageElement = React.createRef();

    let sendMessage = () => { 
        let text = newMessageElement.current.value;
        alert(text); 
    }


    return (
        <div>
            <div className={s.message}>
                {props.message}
            </div>
            <div className={s.textarea}>
                <textarea ref={newMessageElement} ></textarea> 
                <button onClick={ sendMessage } > Send </button>
            </div>
        </div>
    );
}


export default Message; 