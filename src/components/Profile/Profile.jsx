import React from "react";
import MyPosts from "./My_Posts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from "./Profile_info/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts = {props.profilePage.posts}
        newPostText = {props.profilePage.newPostText}
        dispatch = {props.dispatch}
        />
    </div>
  );
};

export default Profile;
