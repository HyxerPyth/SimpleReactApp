import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let postData = [
    {id: 1, message: "Hi, how are you?", likesCount: 11},
    {id: 2, message: "It's my first post", likesCount: 23},
    {id: 2, message: "It's my first post", likesCount: 23},
    {id: 2, message: "It's my first post", likesCount: 23}
  ]

  let postElements = postData.map( p => <Post message={p.message} likesCount={p.likesCount} /> )

    return (

      <div className={s.postsBlocks}>
        <h3>My Posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
          {postElements}
        </div>
      </div>
    )
}

export default MyPosts;