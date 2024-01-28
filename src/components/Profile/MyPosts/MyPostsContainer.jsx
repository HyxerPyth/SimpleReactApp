import React from "react";
import Post from "./Post/Post";
import { addPostActionCreator, updatePostAreaActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

  let state = props.store.getState().profilePage.postData;

  let addPost = () => { 
    let clearArea = updatePostAreaActionCreator("");
    props.store.dispatch(addPostActionCreator());
    props.store.dispatch(clearArea);
  }

  let onPostChange = (text) => {
    let action = (updatePostAreaActionCreator(text));
    props.store.dispatch(action);
  }

    return (<MyPosts updatePostArea={onPostChange} addPost={addPost} postData={state} />)
}

export default MyPostsContainer;