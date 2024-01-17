import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postElements = props.postData.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

  let newPostElement = React.createRef(); 

  let addPost = () => { 
    props.dispatch({type: 'ADD-POST' });
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', text });
  }

    return (
      <div className={s.postsBlocks}>
        <h3>My Posts</h3>
        <div>
          <div>
            <textarea  onChange={ onPostChange } ref={newPostElement} ></textarea>
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