import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../common/FormsControls/FormsControls";
import { maxLength, required } from "../../../utils/validators/validators";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength15 = maxLength(15);

const MyPostForm = (handleSubmit) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={"New post"} name={"post"} component={Textarea} validate={[required, maxLength15]}></Field>
      </div>
      <div>
        <button type="button">Add post</button>
      </div>
    </form>
  )
}
const MyPostReduxForm = reduxForm({ form: 'post' })(MyPostForm)

const MyPosts = React.memo(({posts, addPost}) => {
  const PostElements =
    posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

  const addNewPost = (values) => {
    addPost(values.post)
  }

    return (
      <div className={classes.post}>
        <h3>My Posts</h3>
        <MyPostReduxForm onSubmit={addNewPost} />
        <div className={classes.item}>
          {PostElements}
        </div>

      </div>
    );
})

export default MyPosts;
