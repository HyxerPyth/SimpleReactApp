import React from "react"; 
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
    return (
      <div>
        <Profileinfo />
        <MyPosts postData={props.state.postData} newPostText={props.state.postData.newPostText} dispatch={props.dispatch} />
      </div>
    );
}

export default Profile;
