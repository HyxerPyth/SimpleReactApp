import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updatePostAreaActionCreator } from "../../../redux/state";



const MyPosts = (props) => {

  let postElements = props.postData.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

  let newPostElement = React.createRef(); 

  let addPost = () => { 
    let clearArea = updatePostAreaActionCreator("");
    props.dispatch(addPostActionCreator());
    props.dispatch(clearArea);
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = (updatePostAreaActionCreator(text));
    props.dispatch(action);
  }

    return (
      <div className={s.postsBlocks}>
        <h3>My Posts</h3>
        <div>
          <div>
            <textarea  onChange={ onPostChange } ref={newPostElement} value={props.updatePostArea} ></textarea>
          </div>
          <div>
            <button onClick={ addPost } >Add post</button>
          </div>
        </div>
        <div className={s.posts}>
          {postElements}
        </div>
      </div>
    )
}

export default MyPosts;