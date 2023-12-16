import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
      <div className={s.content}>
      <div>
      <img src="https://wallpaperaccess.com/full/1918192.jpg"></img>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
    )
}

export default Profile;