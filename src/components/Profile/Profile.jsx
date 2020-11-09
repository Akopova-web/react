import React from "react";
import store from "../../redux/store";
import MyPosts from "./My_Posts/MyPosts";
import MyPostsContainer from "./My_Posts/MyPostsContainer";
import classes from "./Profile.module.css";
import ProfileInfo from "./Profile_info/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
