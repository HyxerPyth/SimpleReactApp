import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postElements = props.postData.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

  let newPostElemnt = React.createRef(); 

  let addPost = () => { 
    let text = newPostElemnt.current.value;
    props.addPost(text);
  }

  let addPostArea = () => {
 
    let textEdit = newPostElemnt.current.value;
    props.addPostArea(textEdit);
    debugger;
  }

    return (
      <div className={s.postsBlocks}>
        <h3>My Posts</h3>
        <div>
          <div>
            <textarea  onChange={ addPostArea } ref={newPostElemnt} ></textarea>
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