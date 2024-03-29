import React from "react";
import classes from "./Post.module.css";

const Post = ({message, likesCount}) => {
  return (
    <div className={classes.item}>
      <img src="https://i.pinimg.com/236x/c2/af/09/c2af0941a9eace5f0ba3dc63284d3860--mr-bean-funny-color-blue.jpg" alt="" />
      { message }
      <div>
        likes= { likesCount }
      </div>
    </div>
  );
};

export default Post;
