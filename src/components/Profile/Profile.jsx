import React from "react";
import MyPostsContainer from "./My_Posts/MyPostsContainer";
import ProfileInfo from "./Profile_info/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo 
      isOwner={props.isOwner}
      profile = {props.profile} 
      status = {props.status} 
      updateUserStatus = {props.updateUserStatus}
      changePhoto = {props.changePhoto} 
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
