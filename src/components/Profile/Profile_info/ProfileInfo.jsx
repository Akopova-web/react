import React from "react";
import Preloader from "../../../common/Preloader";
import classes from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/Images/empty_avatar.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateUserStatus }) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img alt="" src={profile.photos.large != null ? profile.photos.large : userPhoto} />
                <div>{profile.fullName}</div>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
            </div>
        </div>
    );
};

export default ProfileInfo;