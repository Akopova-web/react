import React from "react";
import MyPosts from "./My_Posts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from "./Profile_info/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
