import React from "react"; 
import s from "./Profileinfo.module.css";


const Profileinfo = () => {
    return (
    <div>
      <div>
      <img src="https://wallpaperaccess.com/full/1918192.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
    );
}

export default Profileinfo;