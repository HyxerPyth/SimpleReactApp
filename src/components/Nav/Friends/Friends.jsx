import React from "react"; 
import s from "../Nav.module.css"

const Friends = (props) => {
    return (
        <div className={s.friendsBox}>
            <div>
                <img src={props.profileImage} className={s.profileImage}></img>
            </div>
            <div className={s.friendsData}>
                {props.name}
            </div>
        </div>
    )
}

export default Friends;