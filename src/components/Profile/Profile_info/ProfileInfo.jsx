import React from "react";
import Preloader from "../../../common/Preloader";
import classes from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/Images/empty_avatar.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ changePhoto, isOwner, profile, status, updateUserStatus }) => {
    if (!profile) {
        return <Preloader />
    }

    const onChoseImage = (e) => {
        e.target.files.length && changePhoto(e.target.files[0]) 
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img alt="" src={profile.photos.large != null ? profile.photos.large : userPhoto} />
                { isOwner && <input type="file" onChange={onChoseImage} /> }
                <div>{profile.fullName}</div>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
            </div>
        </div>
    );
};

export default ProfileInfo;