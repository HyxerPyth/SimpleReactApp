import React from "react";
import s from "./Post.module.css";

const Post = () => {
    return (
          <div className={s.item}>
            <img src="https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar01-512.png"></img>
            post 1
              <div>
              <span>like</span>
            </div>
          </div>
    )
}

export default Post;