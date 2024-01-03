import React from "react"; 
import s from "../Nav.module.css"

const SideBar = (props) => {
    return (
        <div className={s.SideBarBox}>
            <div>
                <img src={props.profileImage} className={s.profileImage}></img>
            </div>
            <div className={s.SideBar}>
                {props.name}
            </div>
        </div>
    )
}

export default SideBar;