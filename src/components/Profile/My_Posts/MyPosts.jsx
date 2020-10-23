import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

let postsData = [
  { id: 1, likesCount: 13, post: "hello" },
  { id: 2, likesCount: 23, post: "How are you?" },
  { id: 3, likesCount: 13, post: "Yo, mazafucka" }
]

let PostElements = postsData
  .map(post => <Post message={post.post} likesCount={post.likesCount} />);

const MyPosts = () => {
  return (

    <div className={classes.posts}>
      <h3>My Posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={classes.item}>
        {PostElements}
      </div>
    </div>
  );
};

export default MyPosts;
