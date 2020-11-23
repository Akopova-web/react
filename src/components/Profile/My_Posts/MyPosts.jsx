import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let PostElements =
    props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

  let newPostsElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostsElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.post}>

      <h3>My Posts</h3>

      <div>
        <textarea onChange={onPostChange} ref={newPostsElement} value={props.newPostText} />
      </div>

      <div>
        <button onClick={addPost}>Add post</button>
      </div>

      <div className={classes.item}>
        {PostElements}
      </div>

    </div>
  );
};

export default MyPosts;
